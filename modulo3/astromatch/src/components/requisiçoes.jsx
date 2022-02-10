import axios from "axios";
import { Url } from './url'




export const getPerson = (estado) => {

  axios(`${Url}/person`)

    .then((positive) => {

     estado(positive.data.profile)
      
    })
    .catch((negative) => {

      console.log(negative)

    })
}



export const getMatchs = (estado) => {

    axios(`${Url}/matches`)

      .then((positive) => {

        console.log(positive.data.profile)
        
      })
      .catch((negative) => {

        console.log(negative)

      })
  }