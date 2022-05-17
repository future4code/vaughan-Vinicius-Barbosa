import { Request, Response } from 'express'; 
import { connection } from "../data/connection"
import { Authenticator } from '../services/Authenticator';
import { IdGenerator } from '../services/IdGenerator';

export const postSeguir = async (req: Request,res: Response) => {
  const token  = req.headers.authorization as string 
  const { follow } = req.body
   try {
      const id = new IdGenerator().generateId()
      if(!token) {
         throw new Error("Verifique os dados de headers e tente novamente");
      }
      const verify = new Authenticator().GetTokenData(token)
      if(!verify) {
         throw new Error("token invalido");
      }
      if(!follow || typeof follow !== 'string') {
         throw new Error("O campo follow deve sem preenchido com uma string");
      }
      const data = await connection("cookenu_seguidores")
      .where('id_user',verify.id)

      const findId_segue = data.filter((x: { id_segue: string; })=> x.id_segue === follow)
       if(findId_segue.length > 0) {
         throw new Error("Usuario ja seguindo");
      } 

      await connection("cookenu_seguidores")
      .insert({id, id_user:verify.id, id_segue:follow})  

      res.status(200).send({message: "Seguindo usuario"});
   } catch (err: any) {
      res.status(400).send(err.message)
   }
}