import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { role } from "../types/userType";

export class UserBusiness {

   login(email: string, password: string, id:string, role:role) {
      if (!password || !email) {
         throw new Error("Verifique os dados e tente novamente");
      }
      if (typeof password !== 'string' || typeof email !== 'string') {
         throw new Error("Erro de tipo");
      }
      if (email.includes("@") === false) {
         throw new Error("Insira um arroba");
      }

      const token = new Authenticator().GenerateToken({ id: id, role: role })

      return token
   }
   
   signup = async (id:string, email: string, password: string, role: role) => {

      if (!password || !email || !role) {
         throw new Error("Verifique os dados e tente novamente");
      }
      if (typeof password !== 'string' || typeof email !== 'string') {
         throw new Error("Erro de tipo");
      }
      if (email.includes("@") === false) {
         throw new Error("Insira um arroba");
      }

      const cypherPassword = new HashManager().createHash(password)

      await new UserDataBase().insertUserDATA({
          id,
          email,
          password: cypherPassword,
          role
      })

      const token = new Authenticator().GenerateToken({ id: id, role: role })
      return token
  }
}