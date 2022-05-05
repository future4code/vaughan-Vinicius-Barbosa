import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';
import { BaseDataBase } from '../data/BaseDataBase';
import { UserDataBase } from '../data/UserDataBase';
import { Authenticator } from '../services/Authenticator';
import { IdGenerator } from '../services/IdGenerator';

export class PostController extends BaseDataBase {

   createPost = async (req: Request,res: Response) => {

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

   findPostbyID = async (req: Request,res: Response) => {

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
   
         res.status(200).send({message:"usuario encontrado!!"});
   
      } catch (err: any) {
   
         res.status(400).send({message : err.message})
      }
   }
}

