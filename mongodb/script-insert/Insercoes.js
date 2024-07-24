const database = 'Trabalho1';
use(database);

db.cidades.insertMany([
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f678"),
        nome: "Porto Alegre",
        estadoId: ObjectId("60ad5f62f8e1a21a30d5f679")
    },
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f67a"),
        nome: "Viamão",
        estadoId: ObjectId("60ad5f62f8e1a21a30d5f679")
    },
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f67e"),
        nome: "Recife",
        estadoId: ObjectId("60ad5f62f8e1a21a30d5f67d")
    }
]);

db.estados.insertMany([
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f679"),
        uf: "RS",
        nome: "Rio Grande do Sul",
        regiao: "Região Sul"
    },
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f67d"),
        uf: "PE",
        nome: "Pernambuco",
        regiao: "Região Nordeste"
    }
]);


db.clientes.insertMany([
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f66e"),
        nome: "João",
        senhaEmail: {
            senha: "senha123",
            email: "joao@email.com"
        },
        telefones: [
            { numero: 991234070, ddd: 51 },
            { numero: 991234071, ddd: 51 }
        ],
        propostas: [
            ObjectId("60ad5f62f8e1a21a30d5f676")
        ]
    },
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f66f"),
        nome: "Elisa",
        senhaEmail: {
            senha: "password456",
            email: "elisa@email.com"
        },
        telefones: [
            { numero: 995103587, ddd: 55 },
            { numero: 995103588, ddd: 55 }
        ],
        propostas: [
            ObjectId("60ad5f62f8e1a21a30d5f674")
        ]
    },
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f6cd"),
        nome: "Maria",
        senhaEmail: {
            senha: "senhaForteSegura",
            email: "maria@email.com"
        },
        telefones: [
            { numero: 991234072, ddd: 51 },
            { numero: 991234073, ddd: 51 }
        ],
        propostas: [
            ObjectId("60ad5f62f8e1a21a30d5f682")
        ]
    }
]);

db.contratos.insertMany([
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f67b"),
        data: new Date("2023-03-01"),
        documento: "Contrato de venda de imóvel 1",
        propostaId: ObjectId("60ad5f62f8e1a21a30d5f674")
    },
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f67c"),
        data: new Date("2023-04-01"),
        documento: "Contrato de venda de imóvel 2",
        propostaId: ObjectId("60ad5f62f8e1a21a30d5f676")
    }
]);

db.propostas.insertMany([
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f674"),
        imovelId: ObjectId("60ad5f62f8e1a21a30d5f670"),
        clienteId: ObjectId("60ad5f62f8e1a21a30d5f66f"),
        corretorId: ObjectId("60ad5f62f8e1a21a30d5f66b"),
        data: new Date("2023-01-01"),
        valor: 290000,
        condicoes: "À vista",
        situacao: "PENDENTE",
        comissao: 0.05,
        contratos: [
            ObjectId("60ad5f62f8e1a21a30d5f67b")
        ]
    },
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f676"),
        imovelId: ObjectId("60ad5f62f8e1a21a30d5f671"),
        clienteId: ObjectId("60ad5f62f8e1a21a30d5f66e"),
        corretorId: ObjectId("60ad5f62f8e1a21a30d5f66c"),
        data: new Date("2023-02-01"),
        valor: 480000,
        condicoes: "Financiado",
        situacao: "REJEITADA",
        comissao: 0.04,
        contratos: [
            ObjectId("60ad5f62f8e1a21a30d5f67c")
        ]
    },
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f682"),
        imovelId: ObjectId("60ad5f62f8e1a21a30d5f680"),
        clienteId: ObjectId("60ad5f62f8e1a21a30d5f6cd"),
        corretorId: ObjectId("60ad5f62f8e1a21a30d5f66c"),
        data: new Date("2024-01-01"),
        valor: 250000,
        condicoes: "À vista",
        situacao: "PENDENTE",
        comissao: 0.05,
        contrato: null
    },
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f683"),
        imovelId: ObjectId("60ad5f62f8e1a21a30d5f681"),
        clienteId: ObjectId("60ad5f62f8e1a21a30d5f6cd"),
        corretorId: ObjectId("60ad5f62f8e1a21a30d5f66c"),
        data: new Date("2024-02-01"),
        valor: 280000,
        condicoes: "Financiado",
        situacao: "PENDENTE",
        comissao: 0.04,
        contrato: null
    }
]);

db.corretores.insertMany([
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f66c"),
        creciCorretor: 10203040,
        nome: "Eduardo",
        imobiliariaId: ObjectId("60ad5f62f8e1a21a30d5f66a")
    },
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f66d"),
        creciCorretor: 50607080,
        nome: "Lucas",
        imobiliariaId: ObjectId("60ad5f62f8e1a21a30d5f66b")
    }
]);

db.imobiliarias.insertMany([
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f66a"),
        nome: "Imobiliária Sucesso"
    },
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f66b"),
        nome: "Imobiliária Mãos a Obra"
    }
]);

db.imoveis.insertMany([
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f670"),
        tipo: "Apartamento",
        descricao: "Apartamento de 2 quartos",
        valor: 300000,
        endereco: {
            rua: "Rua Monteiro",
            numero: 123,
            complemento: "Apto 101",
            bairro: "Bairro Santa Cruz",
            cidade: {
                _id: ObjectId("60ad5f62f8e1a21a30d5f678"),
                nome: "Porto Alegre",
                estadoId: ObjectId("60ad5f62f8e1a21a30d5f679")
            },
            estado: {
                _id: ObjectId("60ad5f62f8e1a21a30d5f679"),
                uf: "RS",
                nome: "Rio Grande do Sul",
                regiao: "Região Sul"
            },
            cep: 99578234
        },
        proprietarioId: ObjectId("60ad5f62f8e1a21a30d5f673")
    },
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f671"),
        tipo: "Casa",
        descricao: "Casa de 3 quartos",
        valor: 500000,
        endereco: {
            rua: "Rua Gonçalves",
            numero: 456,
            complemento: null,
            bairro: "Bairro Aleluia",
            cidade: {
                _id: ObjectId("60ad5f62f8e1a21a30d5f67a"),
                nome: "Viamão",
                estadoId: ObjectId("60ad5f62f8e1a21a30d5f679")
            },
            estado: {
                _id: ObjectId("60ad5f62f8e1a21a30d5f679"),
                uf: "RS",
                nome: "Rio Grande do Sul",
                regiao: "Região Sul"
            },
            cep: 23894702
        },
        proprietarioId: ObjectId("60ad5f62f8e1a21a30d5f672")
    },
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f680"),
        tipo: "Apartamento",
        descricao: "Apartamento de 1 quarto",
        valor: 200000,
        endereco: {
            rua: "Rua Nova",
            numero: 123,
            complemento: null,
            bairro: "Bairro Central",
            cidade: {
                _id: ObjectId("60ad5f62f8e1a21a30d5f67e"),
                nome: "Recife",
                estadoId: ObjectId("60ad5f62f8e1a21a30d5f67d")
            },
            estado: {
                _id: ObjectId("60ad5f62f8e1a21a30d5f67d"),
                uf: "PE",
                nome: "Pernambuco",
                regiao: "Região Nordeste"
            },
            cep: 90500000
        },
        proprietarioId: ObjectId("60ad5f62f8e1a21a30d5f672")
    },
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f681"),
        tipo: "Casa",
        descricao: "Casa de 2 quartos",
        valor: 300000,
        endereco: {
            rua: "Rua Velha",
            numero: 456,
            complemento: null,
            bairro: "Bairro Antigo",
            cidade: {
                _id: ObjectId("60ad5f62f8e1a21a30d5f678"),
                nome: "Porto Alegre",
                estadoId: ObjectId("60ad5f62f8e1a21a30d5f679")
            },
            estado: {
                _id: ObjectId("60ad5f62f8e1a21a30d5f679"),
                uf: "RS",
                nome: "Rio Grande do Sul",
                regiao: "Região Sul"
            },
            cep: 90500001
        },
        proprietarioId: ObjectId("60ad5f62f8e1a21a30d5f672")
    }
]);

db.ofertas.insertMany([
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f300"),
        dataOferta: new Date("2023-01-15"),
        imovelId: ObjectId("60ad5f62f8e1a21a30d5f670"),
        imobiliariaId: ObjectId("60ad5f62f8e1a21a30d5f66a")
    },
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f301"),
        dataOferta: new Date("2023-02-20"),
        imovelId: ObjectId("60ad5f62f8e1a21a30d5f671"),
        imobiliariaId: ObjectId("60ad5f62f8e1a21a30d5f67e")
    }
]);

db.proprietarios.insertMany([
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f672"),
        clienteId: ObjectId("60ad5f62f8e1a21a30d5f66f"),
        valorMensalidade: 500.00
    },
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f673"),
        clienteId: ObjectId("60ad5f62f8e1a21a30d5f66e"),
        valorMensalidade: 600.00
    },
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f684"),
        clienteId: ObjectId("60ad5f62f8e1a21a30d5f6cd"),
        valorMensalidade: 400.00
    },
    {
        _id: ObjectId("60ad5f62f8e1a21a30d5f685"),
        clienteId: ObjectId("60ad5f62f8e1a21a30d5f66f"),
        valorMensalidade: 500.00
    }
]);
