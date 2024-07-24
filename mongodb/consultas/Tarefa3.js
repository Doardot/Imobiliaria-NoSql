const database = 'Trabalho1';
use(database);

//3. Liste a descrição e o endereço dos imóveis bem como a data, 
// o valor e o nome do cliente que a fez

db.propostas.aggregate([
    {
        $lookup: {
            from: "imoveis",
            localField: "imovelId",
            foreignField: "_id",
            as: "imovel"
        }
    },
    {
        $unwind: "$imovel"
    },
    {
        $lookup: {
            from: "clientes",
            localField: "clienteId",
            foreignField: "_id",
            as: "cliente"
        }
    },
    {
        $unwind: "$cliente"
    },
    {
        $project: {
            descricaoImovel: "$imovel.descricao",
            enderecoImovel: "$imovel.endereco",
            dataProposta: "$data",
            valorProposta: "$valor",
            nomeCliente: "$cliente.nome"
        }
    }
]);