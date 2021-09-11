import jwt from 'jsonwebtoken';
import authConfig from '../config/authenticate.js';

export default class AuthMiddleware {
  static verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401)
        .json({ message: 'Token não enviado' });
    }

    const [, token] = authHeader.split(' ');

    jwt.verify(token, authConfig.TOKEN_SECRET, (error, decode) => {
      if (error) {
        return res.status(401)
          .json({ message: 'Token inválido' });
      }
      req.userId = decode.id;

      return next();
    });
  }
}