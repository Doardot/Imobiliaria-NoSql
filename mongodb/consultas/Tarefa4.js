const database = 'Trabalho1';
use(database);

// 4. Crie uma consulta para excluir todas as propostas rejeitadas feitas para um imóvel dado o seu id

const imovelId = ObjectId("60ad5f62f8e1a21a30d5f671"); // Nota: Substitua pelo ID do imóvel desejado

db.propostas.deleteMany({
    imovelId: imovelId,
    situacao: "REJEITADA"
});