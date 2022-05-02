import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {

   GetMailLoginDATA = async (email: string) => {
      const data = await this.connection("users")
         .where('email', email)
      return data
   }
   GetAllUserDATA = async () => {
      const data = await this.connection("users")
      return data
   }
   insertUserDATA = async (obj:object) => {
     await this.connection("users")
      .insert(obj)
      return "User criado"
   }
   deletUserDATA = async(id:string) => {
      await this.connection("users")
      .where('id', id)
      .del()
      return "User deletado"
   }
}