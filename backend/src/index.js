const express =  require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/* app.use(cors({
    origin: 'http://meuapp.com' //hospedado só pode ser acessado por aqui
}));
*/
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/*
*Rota / Recurso
*/

/**
* Métodos HTTP:
*
* GET: Buscar uma informação do back-end
* POST: Criar uma informação no back-end
* POST: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/

/**
* Tipos de parametros;
*
* Query params:  parametros enviados na rota apos o simbolo de "?" (filtro, paginação)
* Route params: parametros utilizados para identificar recursos
* Request body: corpo da requisiçao, utilizado para criar ou alterar recursos
*
*/


/*
* SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CouchDB
*
*/

/*
*   Driver: SELECT * FROM users
*   Query Builder: tables('users').select('*').(where)
*
*/


