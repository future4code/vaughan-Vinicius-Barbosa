import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Base_url } from "../url/url"

export const RequestLogin = () => {
   const navigate = useNavigate()
   const [user, setUser] = useState('')
   const [passw, setPassw] = useState('')

   const onChangeMail = (e) => {
      setUser(e.target.value)
   }
   const onChangePassw = (e) => {
      setPassw(e.target.value)
   }
   const Login = (name, pass) => {
      const body = { email: name, password: pass }
      axios.post(`${Base_url}/users/login`, body)
         .then((positive) => {
            localStorage.setItem('token', positive.data.token)
            console.log(positive)
            navigate('/Feed')
         })
         .catch((err) => alert('Digite login e senha'))
   }
   return [onChangeMail, onChangePassw, user, passw, Login]
}
