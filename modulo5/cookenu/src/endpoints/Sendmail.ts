import { Request, Response } from 'express';
import { connection } from "../data/connection"
import { Authenticator } from '../services/Authenticator';
import { IdGenerator } from '../services/IdGenerator';
import { transporter } from "../services/mail";

export const sendMail = async (req: Request, res: Response) => {
   const { mail } = req.body
   try {
      const id = new IdGenerator().generateId()
      if (!mail) {
         throw new Error("Verifique os campos title, descricao e tente novamente !");
      }
      if (typeof mail !== 'string') {
         throw new Error("Erro de tipo");
      }

      const data = await connection("cookenu_users")
         .where('email', mail)


      if (data.length === 1) {
         const token = new Authenticator().GenerateToken({ id: data[0].id })
         await transporter.sendMail({
            from: `${process.env.NODEMAILER_USER}`,
            to: req.body.mail,
            subject: 'Mensagem do administrador',
            text: `Caro usuario venho enviar esse id:${data[0].id} para auteraçao de senha`,
            html: `Caro usuario <i>${data[0].nickname}</i> venho enviar esse token com duraçao de duas horas, token:<strong> ${token} </strong>para alteraçao de senha`
         })
      } else {
         throw new Error("Usuario nao encontrado");
      }

      res.status(200).send({ message: "email de recuperaçao enviado" });

   } catch (err: any) {
      res.status(400).send({ message: err.message })
   }
}





