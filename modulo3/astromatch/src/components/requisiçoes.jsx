import axios from "axios";
import { Url } from './url'




export const getPerson = (estado) => {

  axios.get(`${Url}/person`)

    .then((positive) => {

      estado(positive.data.profile)

    })
    .catch((negative) => {

      console.log(negative)

    })
}



export const getMatchs = (estado) => {

  axios.get(`${Url}/matches`)

    .then((positive) => {
      console.log(positive)
      estado(positive.data.matches)

    })
    .catch((negative) => {

      console.log(negative)

    })
}



export const choiceMatch = (id, estado ) => {

   const body= {
      "id": id,
      "choice": true
   }

  axios.post(`${Url}/choose-person`, body)

    .then((positive) => {
      
    })
    .catch((negative) => {
      console.log(negative)
    })
}

export const clear = () => {

  axios.put(`${Url}/clear`)

    .then((positive) => {
         alert('limpo')
    })
    .catch((negative) => {
      console.log(negative)
    })
}