const restify = require("restify");
const errors = require("restify-errors");

const servidor = restify.createServer({
    name: 'loja' ,
    version : '1.0.0'
});

servidor.use(restify.plugins.acceptParser(servidor.acceptable));
servidor.use(restify.plugins.queryParser());
servidor.use(restify.plugins.bodyParser());

servidor.listen(8001, function(){
    console.log("%s executando em %s", servidor.name, servidor.url);
});

var knex = require('knex')({
    client : 'mysql',
    connection : {
        host : "localhost",
        user : "root",
        password : '',
        database : 'loja'
    }
});


servidor.get('/', (req, res, next) => {
    res.send('Bem-vindo(a) a API loja!')
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       