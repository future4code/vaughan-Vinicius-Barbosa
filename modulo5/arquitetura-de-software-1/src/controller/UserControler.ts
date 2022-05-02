import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';
import { BaseDataBase } from '../data/BaseDataBase';
import { UserDataBase } from '../data/UserDataBase';
import { Authenticator } from '../services/Authenticator';
import { IdGenerator } from '../services/IdGenerator';

export class UserController extends BaseDataBase {

   Login = async (req: Request, res: Response) => {

      const { email, password } = req.body

      try {

         const find = await new UserDataBase().GetMailLoginDATA(email)

         const result = new UserBusiness().login(email, password, find[0].id, find[0].role)

         res.status(200).send({ message: 'Usuario logado!', token: result });

      } catch (err: any) {

         res.status(400).send(err.message)
      }

   }

   signUp = async (req: Request, res: Response) => {
      try {
         
         const id = new IdGenerator().generateId()
         const { email, password, role } = req.body
         const token1 = await new UserBusiness().signup(id, email, password, role)

         res.status(201).send({ message: "Usuário criado!", token1 })

      } catch (err: any) {

         res.status(400).send(err.message)
      }
   }


   allUsers = async (req: Request,res: Response) => {

      const token  = req.headers.authorization as string 
   
      try {
   
         const verify = new Authenticator().GetTokenData(token)
         if(!verify) {
            throw new Error("token invalido");
         }
          const data = await new UserDataBase().GetAllUserDATA()
   
         if(!data) {
            throw new Error("usuarios nao encontrados");
         }
   
         res.status(200).send({message:"usuarios encontrados", body: data});
   
      } catch (err: any) {
   
         res.status(400).send(err.message)
      }
   }

   deleteUser = async (req: Request,res: Response) => {

      const token  = req.headers.authorization as string 
   
      try {
         const { id } = req.params
   
         const verify = new Authenticator().GetTokenData(token)
         if(!verify) {
            throw new Error("token invalido");
         }
         if(verify.role !== "ADMIN") {
            throw new Error("Usuario precisa ser administrador para ter acesso a essa funcionalidade");
         }
          const data = await new UserDataBase().deletUserDATA(id)
   
         if(!data) {
            throw new Error("usuarios nao encontrados");
         }
   
         res.status(200).send({message:"usuarios deletado!!"});
   
      } catch (err: any) {
   
         res.status(400).send({message : err.message})
      }
   }
}


