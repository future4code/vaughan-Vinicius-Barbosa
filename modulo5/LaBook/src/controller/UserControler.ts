import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';
import { BaseDataBase } from '../data/BaseDataBase';
import { UserDataBase } from '../data/UserDataBase';
import { Authenticator } from '../services/Authenticator';
import { IdGenerator } from '../services/IdGenerator';

export class UserController extends BaseDataBase {

   Login = async (req: Request, res: Response) => {

      const { email, password } = req.body

      try {

         const find = await new UserDataBase().GetMailLoginDATA(email)

         const result = new UserBusiness().login(email, password, find[0].id, find[0].role)

         res.status(200).send({ message: 'Usuario logado!', token: result });

      } catch (err: any) {

         res.status(400).send(err.message)
      }

   }

   signUp = async (req: Request, res: Response) => {
      try {
         
         const id = new IdGenerator().generateId()
         const { email, password, role } = req.body
         const token1 = await new UserBusiness().signup(id, email, password, role)

         res.status(201).send({ message: "Usuário criado!", token1 })

      } catch (err: any) {

         res.status(400).send(err.message)
      }
   }
}


