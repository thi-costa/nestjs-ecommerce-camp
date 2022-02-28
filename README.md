<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

Tabela de conteúdos
=================
<p align="center">
 <a href="#descricao">Descrição</a> •
 <a href="#instalacao">Instalação</a> • 
 <a href="#execucao">Execução</a> • 
 <a href="#support">Support</a> • 
 <a href="#autor">Autor</a> • 
 <a href="#referencias">Referências</a> • 
 <a href="#license">License</a>
</p>

## Descrição

Api de ecommerce de moda, realizado no 4°camp da ioays, na trilha back-end.

Fora definidos alguns requisitos para execução do projeto:
1. API deve atender às seguintes entidades: Admin, Usuário, Produto e Pedido 
2. Utilizar NestJS
3. Detalhamento no readme do que é necessário para execução
4. Diagrama de banco de dados deve ser entregue (está na pasta "db-diagram")

E, o projeto deve cumprir as seguintes regras do negócio:
1. Um usuário poderá criar uma conta,
autenticar-se, atualizar suas informações
e até deletar seu próprio perfil
2. O usuário poderá ter mais de um pedido
e apenas o dono do pedido poderá ter
acesso a ele.
3. Apenas um administrador poderá
cadastrar produtos e assim definir quanto
deste produto está disponível no estoque.
4. Cada produto precisa ter pelo menos um
tamanho
5. Um e-commerce precisa gerenciar um
estoque dos produtos
6. Um pedido poderá ser realizado apenas por
usuários autenticados.

## Instalação

```bash
$ npm install
```

## Execução
Para execução do app você precisa definir as variáveis do ambiente no arquivo 'env.stage.dev' (em desenvolvimento) e/ou o 'env.stage.prod' (produção). Segue as variáveis definidas como padrão no postgres.
```bash
PORT=3000
JWT_SECRET=pM>]zzX7&(,?kw8?DDc;pXSRq^S(=d)^r=~#XUY/7@5{/"@G6{7Q*9}a8k>wj^Na
EXPIRES_IN=3600
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=fashion-ecommerce
```


Antes de executar os comandos abaixo, você precisa criar um banco de dados postgres com a ferramenta pgAdmin, de modo que as informações definidas nas variáveis de ambiente sejam iguais entre o banco de dados e variável de ambiente escolhidas sejam iguais. Como deixei ativo a opção "autoLoadEntities" no módulo do TypeORM, as migrations são feitas automaticamente para as entities do projeto.

Indico rodar o comando `$ npm run start:dev`, pois já estão com as variáveis de ambiente definidas
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Autor

- Autor - [Thiago Costa](https://github.com/thi-costa)
- Email - [📧](mailto:thiago14abr@gmail.com?cc=&bcc=&subject=Ol%C3%A1%20Thiago!&body=)

## Referências
- NestJS - https://docs.nestjs.com/
- NodeJS - https://nodejs.org/api/

## License

Nest is [MIT licensed](LICENSE).
