

import axios from "axios"
import { useState, useEffect } from "react"
import { Base_url } from "../url/url"

export const useGetPosts = () => {
   const [ page, setPage ] = useState(1)
   const [ update, setUpdate ] = useState('')
   useEffect(() => {GetPosts()},[update])
   useEffect(()=>{GetPosts()},[page])
   const [data, setData] = useState([]);
   const [error, setError] = useState("");
   
   const updatePage = () => {
      if(update == 1) {
         setUpdate(0) 
      } else if (update == 0) {
         setUpdate(1)
      } else {
         setUpdate(1)
      }
   }

   const nextPage = () => {

      setPage(page + 1)

   }
   const comeBack = () => {
      if(page > 1) {
         setPage(page - 1)
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
   return [data, error, GetPosts, setPage, page, nextPage, comeBack, updatePage ]
}

