import { Request, Response } from 'express'; 
import { connection } from "../data/connection"
import { Authenticator } from '../services/Authenticator';

export const postNaoSeguir = async (req: Request,res: Response) => {
  const token  = req.headers.authorization as string 
  const { follow } = req.body
   try {
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
        if(findId_segue.length !== 1) {
         throw new Error("Usuario nao segue esse id");
      }  
       await connection("cookenu_seguidores")
      .where('id', findId_segue[0].id)
      .del()   

      res.status(200).send({message: 'follow removido'});
   } catch (err: any) {
      res.status(400).send(err.message)
   }
}
