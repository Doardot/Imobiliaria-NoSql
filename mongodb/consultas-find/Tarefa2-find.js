const database = 'Trabalho1';
use(database);

// 2. Liste o nome e o e-mail dos clientes bem como a descrição,
// o valor e o endereço dos imóveis que ele cadastrou para venda

db.clientes.find().forEach(cliente => {
    const imovel = db.imoveis.findOne({ _id: cliente.imovelId });

    if (imovel && cliente) {
        print("Nome: " + cliente.nome);
        print("Email: " + cliente.senhaEmail.email);
        print("Descricao: " + imovel.descricao);
        print("Valor: " + imovel.valor);
        print(`Endereco:
            ${imovel.endereco.rua},
            ${imovel.endereco.numero},
            ${imovel.endereco.bairro},
            ${imovel.endereco.cidade},
            ${imovel.endereco.estado};
            ${imovel.endereco.cep},
            ${imovel.endereco.complemento}`);
        print("----");
    }
}
);
