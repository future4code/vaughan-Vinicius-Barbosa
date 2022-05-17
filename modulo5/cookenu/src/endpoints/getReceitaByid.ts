import { Request, Response } from 'express'; 
import { connection } from "../data/connection"
import { Authenticator } from '../services/Authenticator';
export const getReceitaByid = async (req: Request,res: Response) => {
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
       const data = await connection("cookenu_receitas")
      .where('id', id)

      if(!data[0]) {
         throw new Error("usuario nao encontrado");
      }
      const obj = {
         id: data[0].id, dataCriaçao: data[0].data,
        email: data[0].title, nickname:data[0].descricao, 
      }
      res.status(200).send(obj);
   } catch (err: any) {
      res.status(400).send(err.message)
   }
}
