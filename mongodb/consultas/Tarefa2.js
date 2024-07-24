const database = 'Trabalho1';
use(database);

// 2. Liste o nome e o e-mail dos clientes bem como a descrição,
// o valor e o endereço dos imóveis que ele cadastrou para venda

db.clientes.aggregate([
    {
        $lookup: {
            from: "proprietarios",
            localField: "_id",
            foreignField: "clienteId",
            as: "proprietarios"
        }
    },
    {
        $unwind: "$proprietarios"
    },
    {
        $lookup: {
            from: "imoveis",
            localField: "proprietarios._id",
            foreignField: "proprietarioId",
            as: "imoveis"
        }
    },
    {
        $unwind: "$imoveis"
    },
    {
        $project: {
            nome: 1,
            email: "$senhaEmail.email",
            descricaoImovel: "$imoveis.descricao",
            valorImovel: "$imoveis.valor",
            enderecoImovel: "$imoveis.endereco"
        }
    }
]);