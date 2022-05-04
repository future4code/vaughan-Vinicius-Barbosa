import { Request, Response } from 'express'; 
import { connection } from "../data/connection"

export const get5Last = async (req: Request,res: Response) => {

   let pagina: number = Number(req.params.page)
   try {
      
      const tamanho: number = 5

      const offset: number = tamanho * (pagina - 1)
      
      const resultado = await connection("aula48_exercicio")
      .limit(tamanho)
      .offset(offset)
      .orderBy('name','desc')
      
      if (pagina <= 0) {pagina = 1}
      
      res.status(200).send(resultado);
   } catch (err: any) {

      res.status(400).send(err.message)
   }

}
