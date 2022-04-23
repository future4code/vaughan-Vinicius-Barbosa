import axios from 'axios'
import { base } from './base';



//a. Esta funçao e uma arrow function 

//b. ===================

const notifySubscribersPromiseAll = async (
   id: string[],
   message: string,
): Promise<void> => {
   try {

      const send = id.map((subscriberId: string) => {
         return axios.post(`${base}/notifications`, {
            subscriberId,
            message: message
         })
      })
      await Promise.all(send)
      console.log("Notificações enviadas!")
   } catch (err: any) {

      console.log(err.response?.data || err.message)
   }

}

notifySubscribersPromiseAll(["eb98add9-6981-41d6-8d9f-d63258486296",], "conteudo da noticia")

//============================   

