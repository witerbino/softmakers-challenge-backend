<div align="center">
  <br/>
  <div>
    <img src="github/logo.png" />
  </div>
  <br/>
  <br/>
  <p>
    Projeto desenvolvido para o desafio da vaga de desenvolvedor Fullstack na <a href="https://www.softmakers.com.br/">Softmakers</a></p>

  <p>O objetivo era desenvolver uma API que seja responsável por fazer o cadastro e login de usuários, cadastrar, listar, visualizar, alterar e excluir posts.</p>
<br/>
<br/>
</div>

# Tecnologias

- [Express](https://expressjs.com/)
- [Prisma.io](https://www.prisma.io/)
- [Bcryptjs](https://github.com/dcodeIO/bcrypt.js#readme)
- [JsonWebToken](https://github.com/auth0/node-jsonwebtoken)

# Rodando

1. Clone esse repositório `git clone https://github.com/witerbino/softmakers-challenge-backend.git`
2. Entre na pasta do projeto `cd softmakers-challenge-backend`
3. Execute o comando `npm install`
4. É preciso alterar as configurações de acesso ao banco de dados, altere o nome do arquivo `.env.local` para `.env`
5. Dentro do arquivo `.env` adicione as configurações de acesso ao seu banco de dados.
6. Execute o comando `npm run migrate`, para criar as tabelas
7. Para rodar o projeto execute o comando `npm start`, e a aplicacão estara disponível na url: `http://localhost:3000/api/` (register, login ou posts).

# Licença

Este projeto está licenciado sob a Licença MIT - veja a página [LICENÇA](https://opensource.org/licenses/MIT) para detalhes.