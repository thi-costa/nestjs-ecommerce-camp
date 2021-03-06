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

Tabela de conte??dos
=================
<p align="center">
 <a href="#descri????o">Descri????o</a> ???
 <a href="#bd">BD</a> ???
 <a href="#instala????o">Instala????o</a> ??? 
 <a href="#execu????o">Execu????o</a> ??? 
 <a href="#support">Support</a> ??? 
 <a href="#autor">Autor</a> ??? 
 <a href="#refer??ncias">Refer??ncias</a> ??? 
 <a href="#license">License</a>
</p>

## Descri????o

Api de ecommerce de moda, realizado no 4??camp da ioays, na trilha back-end.

Fora definidos alguns requisitos para execu????o do projeto:
1. API deve atender ??s seguintes entidades: Admin, Usu??rio, Produto e Pedido 
2. Utilizar NestJS
3. Documente seus endpoints (a collections do postman utilizada est?? na pasta "./postman-requests")
4. Detalhamento no readme do que ?? necess??rio para execu????o
5. Diagrama de banco de dados deve ser entregue (est?? na pasta "db-diagram")

E, o projeto deve cumprir as seguintes regras do neg??cio:
1. Um usu??rio poder?? criar uma conta,
autenticar-se, atualizar suas informa????es
e at?? deletar seu pr??prio perfil -> est?? sendo atendida (poss??vel checar na pasta users de rota)
2. O usu??rio poder?? ter mais de um pedido
e apenas o dono do pedido poder?? ter
acesso a ele.
3. Apenas um administrador poder??
cadastrar produtos e assim definir quanto
deste produto est?? dispon??vel no estoque. -> apenas um admin autenticado consegue criar novos produtos
4. Cada produto precisa ter pelo menos um
tamanho -> cumprido
5. Um e-commerce precisa gerenciar um
estoque dos produtos -> acrescentei a possibilidade
6. Um pedido poder?? ser realizado apenas por
usu??rios autenticados.

## BD
Utilizou-se o banco de dados dos postgres nesse projeto.
Segue abaixo imagem do diagrama do banco de dados idealizado.

![img](/db-diagram/diagram.png)

## Instala????o

```bash
$ npm install
```

## Execu????o
Para execu????o do app voc?? precisa definir as vari??veis do ambiente no arquivo 'env.stage.dev' (em desenvolvimento) e/ou o 'env.stage.prod' (produ????o). Segue as vari??veis definidas como padr??o no postgres.
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


Antes de executar os comandos abaixo, voc?? precisa criar um banco de dados postgres com a ferramenta pgAdmin, de modo que as informa????es definidas nas vari??veis de ambiente sejam iguais entre o banco de dados e vari??vel de ambiente escolhidas sejam iguais. Como deixei ativo a op????o "autoLoadEntities" no m??dulo do TypeORM, as migrations s??o feitas automaticamente para as entities do projeto.

Indico rodar o comando `$ npm run start:dev`, pois j?? est??o com as vari??veis de ambiente definidas
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
- Email - [????](mailto:thiago14abr@gmail.com?cc=&bcc=&subject=Ol%C3%A1%20Thiago!&body=)

## Refer??ncias
- NestJS - https://docs.nestjs.com/
- NodeJS - https://nodejs.org/api/

## License

Nest is [MIT licensed](LICENSE).
