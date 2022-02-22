import { useState } from "react"


export const ToSee=() => {

   const [seePass, setSeePass] = useState('password')

   const switcher = () => {
      if (seePass == 'password') {
         setSeePass('text')
      } else {
         setSeePass('password')
      }
   }

   return [seePass, switcher] 
}

