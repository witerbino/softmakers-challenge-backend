import authConfig from '../config/authenticate.js';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class AuthService {
  #repository = undefined;

  constructor(repository) {
    this.#repository = repository;
  }

  #generateToken(id) {
    return jwt.sign({ id }, authConfig.TOKEN_SECRET, {
      expiresIn: authConfig.EXPIRES_IN
    });
  }

  async authenticate(email, password) {
    if (!email || !password) {
      throw new Error('Os campos email e senha são obrigatórios');
    } 

    const user = await this.#repository.getUserByEmail(email);
    const confirmPassword = await bcrypt.compare(password, user.password);
    
    if (!user || !confirmPassword) {
      throw new Error('Email ou senha inválido');
    }
    
    const token = this.#generateToken(user.id);

    return { user, token };
  }
}