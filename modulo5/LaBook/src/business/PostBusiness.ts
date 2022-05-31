import { InterfacePostDatabase, Post, PostInputDTO } from '../model/Post'
import { Authenticator } from '../services/Authenticator'
import { IdGenerator } from '../services/IdGenerator'
import { POST_TYPE } from '../types/POST_TYPE'

export class PostBusiness {
    constructor(
        private postDatabase: InterfacePostDatabase
    ) { }

    public post = async (input: PostInputDTO): Promise<void> => {
        const { token, photo, description, type } = input
        const typeLC: string = type.toLowerCase()

        const authentication = new Authenticator().GetTokenData(token)
        if (!authentication) {
            throw new Error("Token inválido")
        }

        if (!photo || !description || !type) {
            throw new Error("Um ou mais campos vazios")
        }

        if (typeLC !== POST_TYPE.NORMAL && typeLC !== POST_TYPE.EVENT) {
            throw new Error("Tipo de post inválido")
        }

        const id: string = IdGenerator.generateId()

        const post: Post = new Post(id, photo, description, typeLC, authentication.id)

        await this.postDatabase.insertPost(post)
    }

    login(email: string, password: string, id:string, role:role) {
        if (!password || !email) {
           throw new Error("Verifique os dados e tente novamente");
        }
        if (typeof password !== 'string' || typeof email !== 'string') {
           throw new Error("Erro de tipo");
        }
        if (email.includes("@") === false) {
           throw new Error("Insira um arroba");
        }
  
        const token = new Authenticator().GenerateToken({ id: id, role: role })
  
        return token
     }
     
     signup = async (id:string, email: string, password: string, role: role) => {
  
        if (!password || !email || !role) {
           throw new Error("Verifique os dados e tente novamente");
        }
        if (typeof password !== 'string' || typeof email !== 'string') {
           throw new Error("Erro de tipo");
        }
        if (email.includes("@") === false) {
           throw new Error("Insira um arroba");
        }
  
        const cypherPassword = new HashManager().createHash(password)
  
        await new UserDataBase().insertUserDATA({
            id,
            email,
            password: cypherPassword,
            role
        })

        const token = new Authenticator().GenerateToken({ id: id, role: role })
        return token
    }
} 
