const database = 'Trabalho1';
use(database);

// 1. Liste o nome de todos os clientes cadastrados
db.clientes.find({}, { nome: 1, _id: 0 });