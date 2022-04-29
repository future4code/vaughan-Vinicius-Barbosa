import { Request, Response } from 'express';
import { connection } from "../data/connection"
import { Authenticator } from '../services/Authenticator';
export const postDeletaReceita = async (req: Request, res: Response) => {
   const { receita } = req.body
   const token = req.headers.authorization as string
   try {
      if (!receita) {
         throw new Error("Verifique os campo id e tente novamente !");
      }
      const verify = new Authenticator().GetTokenData(token)
      if (!verify) {
         throw new Error("token invalido");
      }
      if (typeof receita !== 'string') {
         throw new Error("Erro de tipo");
      }
      const findUser = await connection("cookenu_receitas")
         .where({ id_user: verify.id })
      const verifyUser: any[] = findUser.filter((x: { id: any; }) => x.id === receita)

      if (verifyUser.length === 0) {
         throw new Error("receita nao existe ou nao pertence a este usuario");
      }

      await connection("cookenu_receitas")
         .where({ id: verifyUser[0].id })
         .del()

      res.status(200).send({ message: "receita deletada" });

   } catch (err: any) {
      res.status(400).send(err.message)
   }
}

