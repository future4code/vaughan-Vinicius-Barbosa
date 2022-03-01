
import axios from "axios"
import { useState, useEffect } from "react"
import { Base_url } from "../url/url"

export const useGetComments = (id) => {

   const [data, setData] = useState([]);
   const [error, setError] = useState("");

   const GetComments = (id) => {

      const token = localStorage.getItem("token")
      const auth = {headers: {Authorization: token}}
      axios.get(`${Base_url}/posts/${id}/comments`, auth)
         .then((positive) => {
            setData(positive)
            console.log('get comments deu certo ', positive)
         })
         .catch((err) => setError(err))
   }
   return [data, error, GetComments]
}


