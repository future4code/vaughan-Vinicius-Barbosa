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

export const sendCandidate = (body, tripId, clear) => {
  axios.post(`${Url_base}/trips/${tripId}/apply`, body)
      .then((positive) => {
          alert("Aplicação enviada com sucesso!")
      })
      .catch((err) => console.log(err, 'sdfasdflasdkflsdakflk'))
}
