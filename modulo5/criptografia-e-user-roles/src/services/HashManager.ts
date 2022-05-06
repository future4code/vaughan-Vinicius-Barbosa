import { compareSync, genSaltSync, hashSync } from "bcryptjs"

export class HashManager{
    createHash = (plainText:string):string =>{

        //12 -> magic number
        // Parâmetro que define o tempo de execução do algoritmo
        const cost = 12


        // String aleatória para gerar hashs diferentes mesmo com senhas iguais
        // Exemplo: $2a$12$kIy2fVT845ojQeSSYHvPVu
        const salt:string = genSaltSync(cost)

        
        // Gerando o hash
        const cypherText:string = hashSync(plainText, salt)
        return cypherText
    }

    compareHash = (plainText:string, cypherText:string):boolean =>{
        return compareSync(plainText, cypherText)
    }
}