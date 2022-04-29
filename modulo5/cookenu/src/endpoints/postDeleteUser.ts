import { Request, Response } from 'express';
import { connection } from "../data/connection"
import { Authenticator } from '../services/Authenticator';
export const postDeleteUser = async (req: Request, res: Response) => {
   const { id } = req.body
   const token = req.headers.authorization as string
   try {
      if (!id) {
         throw new Error("Verifique os campo id e tente novamente !");
      }
      const verify = new Authenticator().GetTokenData(token)
      if (!verify) {
         throw new Error("token invalido");
      }
      if (typeof id !== 'string') {
         throw new Error("Erro de tipo");
      }
      const findUser = await connection("cookenu_users")
         .where({ id: verify.id })
      const findUserDelete = await connection("cookenu_users")
      .where({ id: id })
      if(findUserDelete.length === 0) {
         throw new Error("usuario nao encontrado !")
      }
      if (findUser.length === 0) {
         throw new Error("usuario nao existe");
      }
      if(findUser[0].role !== 'ADMIN') {
         throw new Error("usuario nao e administrador");
      } 
      await connection("cookenu_users")
      .where({ id: id })
      .del()
      res.status(200).send({ message: 'usuario deletado!!!' });

   } catch (err: any) {

      res.status(400).send({messageError: err.message})
   }
}
