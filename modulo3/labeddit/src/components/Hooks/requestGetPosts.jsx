


import axios from "axios"
import { useState, useEffect } from "react"
import { Base_url } from "../url/url"

export const useGetPosts = () => {

   useEffect(()=>{GetPosts()},[])

   const [data, setData] = useState([]);
   const [error, setError] = useState("");



   const GetPosts = () => {

      const token = localStorage.getItem("token")
      const auth = {headers: {Authorization: token}}
      axios.get(`${Base_url}/posts`, auth)
         .then((positive) => {
            setData(positive)
         })
         .catch((err) => setError(err))
   }
   return [data, error, GetPosts]
}

