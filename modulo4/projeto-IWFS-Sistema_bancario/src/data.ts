
export type datatype = {

    id: number;
    conta: {
        saldo: number;
        extrato: {
            id: number;
            valor: number;
            data: string;
            descriçao: string;
        }[];
    };
    idade: number;
    nome: string;
    cpf: number;
    dataNascimento: string;
}

export const dataBase:datatype[] = [

    {
        id: 1113456345,
        conta: {
            saldo: 100,
            extrato: [
                {
                    id: 1,
                    valor: 200,
                    data: "02042022",
                    descriçao: "conta de luz",
                }
            ]
        },
        idade: 44,
        nome: 'joao',
        cpf: 12312312326,
        dataNascimento: "27071995"
    },
    {
        id: 2222342342,
        conta: {
            saldo: 100,
            extrato: [
                {
                    id: 1,
                    valor: 0,
                    data: "",
                    descriçao: "",
                }
            ]
        },
        idade: 44,
        nome: 'marcelo',
        cpf: 34567854674,
        dataNascimento: "23011966"
    }
]