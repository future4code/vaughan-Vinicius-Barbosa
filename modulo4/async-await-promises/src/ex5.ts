import axios from 'axios'
import { base } from './base';



//a. Esta funçao e uma arrow function 

//b. ===================

const notifySubscribers = async (
  id: string[],
  message: string,
): Promise<void> => {

  try {

    for (let i of id) {
      console.log(`mensagem enviada para o id ${i}`)
      await axios.put(`${base}/news`, {
        id: i, message: message
      });

    }
    console.log("notificaçoes enviadas")

  } catch (err: any) {

    console.log(err.response?.data || err.message)

  }

}

notifySubscribers(["eb98add9-6981-41d6-8d9f-d63258486296",], "conteudo da noticia")

//============================   