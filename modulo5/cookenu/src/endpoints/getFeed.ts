import { Request, Response } from 'express';
import { connection } from "../data/connection"
import { Authenticator } from '../services/Authenticator';

export const getFeed = async (req: Request, res: Response) => {
   const token = req.headers.authorization as string

   try {
      if (!token) {
         throw new Error("Verifique os dados de headers e tente novamente");
      }
      const verify = new Authenticator().GetTokenData(token)
      if (!verify) {
         throw new Error("token invalido");
      }

      const data = await connection("cookenu_seguidores")
         .where('id_user', verify.id)
         .select('id_segue')

      let feed: any[] = []

      for (let i of data) {
            feed.push(await connection("cookenu_receitas")
               .select(
                  'cookenu_receitas.id',
                  'cookenu_receitas.title',
                  'cookenu_receitas.descricao',
                  'cookenu_receitas.data as createdAt',
                  'cookenu_users.id as userId',
                  'cookenu_users.nickname as userName'
               )
               .join('cookenu_users', "cookenu_receitas.id_user", "cookenu_users.id")
               .where({ id_user: i.id_segue }))
      }
      const arrays = feed.flat(1)

      res.status(200).send({ feed: arrays });
   } catch (err: any) {
      res.status(400).send(err.message)
   }
}
