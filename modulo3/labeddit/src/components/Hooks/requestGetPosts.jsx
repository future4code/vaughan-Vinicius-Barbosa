

import axios from "axios"
import { useState, useEffect } from "react"
import { Base_url } from "../url/url"

export const useGetPosts = () => {
   const [ page, setPage ] = useState(1)
   useEffect(()=>{GetPosts()},[page])

   const [data, setData] = useState([]);
   const [error, setError] = useState("");
   

   const nextPage = () => {

      setPage(num + 1)

   }
   const comeBack = () => {
      if(num > 0) {
         setPage(num - 1)
      }
   }

   const GetPosts = () => {

      const token = localStorage.getItem("token")
      const auth = {headers: {Authorization: token}}
      axios.get(`${Base_url}/posts?page=${page}&size=10`, auth)
         .then((positive) => {
            setData(positive)
         })
         .catch((err) => setError(err))
   }
   return [data, error, GetPosts, setPage, page ]
}

