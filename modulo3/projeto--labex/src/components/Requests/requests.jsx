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

export const deleteTrip = (id) => {
  const token = localStorage.getItem('token')
  const headers = {headers: {auth: token}}
  const con = window.confirm("Tem certeza que voce deseja apagar")
  
  if(con) {
    axios.delete(`${Url_base}/trips/${id}`, headers).then((res)=>{
      console.log("Viagem apagada")
    }).catch((res)=>{
      console.log(res, " error ao tentar apagar a viagem")
    })
  } 
} 

export const postTravel = (body) => {

  const token = localStorage.getItem('token')
  const headers = {headers: {auth: token}}
  axios.post(`${Url_base}/login`, headers, body)
  .then((positive) => {
      console.log(positive)
  })
  .catch((err) => console.log(err.statusText, 'Senha incorreta'))
}
