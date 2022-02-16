import axios from "axios";
import { Url_base } from './Url_base'

export const TravelsList = (state) => {
    axios.get(`${Url_base}/trips`)
    .then((positive) => {
      state(positive.data.trips)
    })
    .catch((negative) => {
       alert('erro contate o suporte tecnico para mais informaçoes ',negative)
    })
}

