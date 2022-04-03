import { dataBase } from './data';
import express, { Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net'
import { verificaCPF } from './verifyCPF';
import { dateNowBR, dateNowCheck } from './dateNow';


const app = express();

app.use(express.json());
app.use(cors());

// ENDPOINTS

// getAllClients
app.get("/", (req: Request, res: Response) => {

    try {


        res.status(200).send(dataBase);

    } catch (err: any) {

        res.status(400).send(err.message)

    }


});

//postAddClient

app.post("/", (req: Request, res: Response) => {
    const { idade, nome, cpf, dataNascimento } = req.body
    try {
        if (!idade || !nome || !cpf || !dataNascimento) {
            throw new Error('any field not specified')
        }
        const newAccount = {
            id: Date.now(),
            conta: {
                saldo: 0,
                extrato: []
            },
            idade: idade,
            nome: nome,
            cpf: Number(cpf),
            dataNascimento: String(dataNascimento),
            tamanho: cpf.lenght
        }
        if (typeof idade !== 'number') {

            throw new Error('idade type not valid')
        }
        if (typeof nome !== 'string') {
            throw new Error('name type not valid')
        }
        if (!Number(cpf)) {
            throw new Error('cpf not valid')
        }
        if (String(newAccount.cpf).length < 11 || String(newAccount.cpf).length > 11) {
            throw new Error('cpf needs 11 characters')
        }
        if (dataNascimento.length > 8 || dataNascimento.length < 8) {
            throw new Error('birth date needs 8 characters')
        }
        const dia = dataNascimento.slice(0, 2)
        const mes = dataNascimento.slice(2, 4)
        const ano = dataNascimento.slice(4, 8)

        const data2 = dateNowCheck
        const userBirthday: string = ano + mes + dia

        if (Number(ano) > new Date().getFullYear() - 18) {
            throw new Error('year not valid')
        }
        if (Number(mes) > 12 || Number(dia) > 31) {
            throw new Error('day or month not valid')
        }
        if (Number(userBirthday) > Number(data2)) {
            throw new Error('you need to be under age "Voce precisa ser maior de idade"')
        }

        for (let i of dataBase) {
            if (i.cpf === newAccount.cpf) {
                throw new Error('Cpf already exists')
            }
        }

        if (!verificaCPF(newAccount.cpf)) {

            throw new Error('CPF invalid')

        }

        dataBase.push(newAccount)

        res.status(200).send('account created');


    } catch (err: any) {

        res.status(400).send(err.message)

    }

});

app.get("/account", (req: Request, res: Response) => {

    const cpf = req.body.cpf
    try {

        if (!cpf) {

            throw new Error('CPF invalid or name')
        }


        const Account = dataBase.filter(x => x.cpf === Number(cpf))
        if (Account.length == 1) {

            const user = {
                nome: Account[0].nome,
                cpf: Account[0].cpf,
                saldo: Account[0].conta.saldo
            }
            res.status(200).send(user);
        }
        throw new Error('not found')


    } catch (err: any) {

        res.status(400).send(err.message)

    }


});

app.put("/account", (req: Request, res: Response) => {

    try {
        const { cash, cpf } = req.body

        if (!cash || !cpf) {
            throw new Error('field not especified')
        }
        if (typeof cash !== 'number') {
            throw new Error('type error')
        }
        if (typeof cpf !== 'string') {
            throw new Error('cpf type error')
        }

        let newCpf = Number(cpf)
        let pay = {
            id: Date.now(),
            data: dateNowBR
        }
        for (let recept of dataBase) {
            if (recept.cpf === newCpf) {
                recept.conta.saldo += cash
                let receptpay = { ...pay, valor: cash, descriçao: "Voce adicionou dinheiro !" }
                recept.conta.extrato.push(receptpay)
            }
        }
        
        res.status(200).send({ message: 'cash added'});

    } catch (err: any) {

        res.status(400).send(err.message)

    }

});

app.post("/account/pay", (req: Request, res: Response) => {

    const acountId = req.headers.authorization

    try {
        const ano1 = new Date().getFullYear() + ""
        const mes1 = new Date().getMonth() + 1 > 10 ? new Date().getMonth() + 1 + "" : "0" + (new Date().getMonth() + 1)
        const dia1 = new Date().getDate() > 10 ? new Date().getDate() + 1 + "" : "0" + new Date().getDate()


        const pay = {
            id: Date.now(),
            valor: req.body.value,
            data: '',
            descriçao: req.body.description
        }
        if (typeof pay.valor !== "number") {
            throw new Error('valor error type')
        }
        if (!req.body.date) {
            pay.data = dateNowBR
        }
        if (req.body.date) {
            if (typeof req.body.date !== 'string') {
                throw new Error('date error type')
            }
            pay.data = req.body.date
            const { data } = pay
            if (data.length > 8 || data.length < 8) {
                throw new Error('date needs 8 characters')
            }
            const dia = data.slice(0, 2)
            const mes = data.slice(2, 4)
            const ano = data.slice(4, 8)
            if (Number(mes) > 12 || Number(dia) > 31) {
                throw new Error('day or month not valid')
            }
            if (ano < ano1 || dia < dia1 || mes < mes1) {
                throw new Error('date not valid')
            }
        }

        for (let i of dataBase) {
            if (i.id === Number(acountId)) {
                if (i.conta.saldo < pay.valor) {
                    throw new Error('Account has no founds')
                }

                i.conta.saldo -= pay.valor
                i.conta.extrato.push(pay)
            }
        }

        const Account = dataBase.filter(x => x.id === Number(acountId))


        res.status(200).send(Account[0].conta);

    } catch (err: any) {

        res.status(400).send(err.message)

    }


});


app.put("/account/transfer", (req: Request, res: Response) => {

    try {

        const { value, nameSend, cpfSend, nameRecept, cpfRecept } = req.body

        if (!value || !nameSend || !cpfSend || !nameRecept || !cpfRecept) {

            throw new Error('Some field empty')

        }
        if (typeof value !== 'number' || typeof cpfSend !== 'number' || typeof cpfRecept !== 'number') {
            throw new Error('value error type')
        }

        if (typeof nameSend !== 'string' || typeof nameRecept !== 'string') {
            throw new Error('name error type')
        }
        if (value < 0) {
            throw new Error('value error')
        }

        const newobj = {
            value: req.body.value, nameSend: req.body.nameSend, cpfSend: req.body.cpfSend,
            nameRecept: req.body.nameRecept, cpfRecept: req.body.cpfRecept
        }

        const verifyCPF1 = dataBase.filter(x => x.cpf === cpfRecept)

        const verifyCPF2 = dataBase.filter(x => x.cpf === cpfSend)

        if (verifyCPF2.length === 0) {
            throw new Error('cpfSend not found')
        }


        if (verifyCPF2[0].conta.saldo < newobj.value) {
            throw new Error('insuficient founds')
        }

        if (verifyCPF1.length === 0) {
            throw new Error('cpfRecept not found')
        }


        let pay = {
            id: Date.now(),
            data: dateNowBR
        }

        for (let send of dataBase) {
            if (send.cpf === cpfSend) {
                send.conta.saldo -= value
                let sendpay = { ...pay, valor: -value, descriçao: "Voce enviou uma transferencia!" }
                send.conta.extrato.push(sendpay)
            }
        }
        for (let recept of dataBase) {
            if (recept.cpf === cpfRecept) {
                recept.conta.saldo += value
                let receptpay = { ...pay, valor: value, descriçao: "Voce recebeu uma transferencia!" }
                recept.conta.extrato.push(receptpay)
            }
        }


        res.status(200).send("Sucess");

    } catch (err: any) {

        res.status(400).send(err.message)

    }


});


const server = app.listen(process.env.PORT || 3001, () => {

    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Running in : http://localhost:${address.port}`)

    } else {
        console.error("failure upon starting server !")
    }

});

