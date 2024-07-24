const database = 'Trabalho1';
use(database);

// 5. Crie uma consulta para reduzir em 20% o percentual das comissões dos corretores de uma determinada 
// imobiliária em todos os imóveis que ainda não tenham contrato gerado

db.imoveis.aggregate([
    {
        $lookup: {
            from: "propostas",
            localField: "_id",
            foreignField: "imovelId",
            as: "propostas"
        }
    },
    {
        $unwind: "$propostas"
    },
    {
        $lookup: {
            from: "corretores",
            localField: "propostas.corretorId",
            foreignField: "_id",
            as: "corretores"
        }
    },
    {
        $match: {
            "corretores.imobiliariaId": ObjectId("60ad5f62f8e1a21a30d5f66a"),
            "propostas.contratos": { $exists: false }
        }
    },
    {
        $project: {
            "comissao": { $multiply: ["$propostas.comissao", 0.2] }
        }
    }
]);
