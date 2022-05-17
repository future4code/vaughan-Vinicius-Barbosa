import { Request, Response } from 'express'; 
import { connection } from "../data/connection"
import { Authenticator } from '../services/Authenticator';

export const getOthersProfiles = async (req: Request,res: Response) => {
  const token  = req.headers.authorization as string 
  const id = req.params.id
   try {
      if(!token) {
         throw new Error("Verifique os dados de headers e tente novamente");
      }
      const verify = new Authenticator().GetTokenData(token)
      if(!verify) {
         throw new Error("token invalido");
      }
       const data = await connection("cookenu_users")
      .where('id', id)
      if(!data[0]) {
         throw new Error("usuario nao encontrado");
      }
      const obj = {
        email: data[0].email, nickname:data[0].nickname, 
        bio: data[0].bio ? data[0]?.bio: 'nao ha biografia' , 
        lema: data[0].lema ? data[0].lema : 'nao ha lema'
      }
      res.status(200).send(obj);
   } catch (err: any) {
      res.status(400).send(err.message)
   }
}
