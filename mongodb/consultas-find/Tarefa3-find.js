const database = 'Trabalho1';
use(database);

//3. Liste a descrição e o endereço dos imóveis bem como a data, 
// o valor e o nome do cliente que a fez

db.propostas.find().forEach(proposta => {
    const imovel = db.imoveis.findOne({ _id: proposta.imovelId });
    const cliente = db.clientes.findOne({ _id: proposta.clienteId });

    if (imovel && cliente) {
        print(`Descrição do imóvel: ${imovel.descricao}`);
        print(`Endereço do imóvel: 
        ${imovel.endereco.rua}, 
        ${imovel.endereco.numero}, 
        ${imovel.endereco.bairro}, 
        ${imovel.endereco.cidade.nome}, 
        ${imovel.endereco.estado.nome}, 
        ${imovel.endereco.cep}, 
        ${imovel.endereco.complemento}`);
        print(`Data da proposta: ${proposta.data}`);
        print(`Valor da proposta: ${proposta.valor}`);
        print(`Nome do cliente: ${cliente.nome}`);
        print('---');
    }
});
