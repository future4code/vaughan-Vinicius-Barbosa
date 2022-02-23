import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Base_url } from "../url/url"

export const RequestCreateLogin = () => {
   const navigate = useNavigate()
   const [user, setUser] = useState('')
   const [mail, setMail] = useState('')
   const [passw, setPassw] = useState('')
   
   const onChangeUser = (e) => {
      setUser(e.target.value)
   }
   const onChangeMail = (e) => {
      setMail(e.target.value)
   }
   const onChangePassw = (e) => {
      setPassw(e.target.value)
   }

   const createLogin = (a, b, c) => {
      const body = { username: a, email: b, password: c }
      axios.post(`${Base_url}/users/signup`, body)
         .then((positive) => {
            console.log(positive)
            alert("Conta criada com sucesso")
            navigate('/')
         })
         .catch((err) => alert(err.statusText, 'Senha incorreta'))
   }

   return [onChangeUser, onChangeMail, onChangePassw, user, passw, mail, createLogin]
}

