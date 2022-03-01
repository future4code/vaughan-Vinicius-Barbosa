
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Base_url } from "../url/url"

export const useSendpost = () => {
   const navigate = useNavigate()
   const [title, setTitle] = useState('')
   const [body, setBody] = useState('')

   const onChangeTitle = (e) => {
      setTitle(e.target.value)
   }
   const onChangeBody = (e) => {
      setBody(e.target.value)
   }

   const SendParanaue = (a, b) => {
      const token = localStorage.getItem("token")
      const auth = {headers: {Authorization: token}}
      const body = { title: a, body: b }
      axios.post(`${Base_url}/posts`,body,auth)
         .then((positive) => {
            console.log(positive)
            navigate('/Feed')
         })
         .catch((err) => alert('Erro ao enviar o seu post entre em contado com o suporte tecnico'))
   }
   return [onChangeTitle, onChangeBody, title, body, SendParanaue]
}


