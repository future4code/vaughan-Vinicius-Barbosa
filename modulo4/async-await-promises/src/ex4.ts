import axios from 'axios'
import { base } from './base';



//a. Esta funçao e uma arrow function 

//b. ===================

const createNews = async (
   title: string,
   content: string,
   date: number
 ): Promise<void> => {
   await axios.put(`${base}/news`, {
     title: title,
     content: content, 
     date: date
   });
 }

 createNews("nova noticia", "conteudo da noticia", 23042022)

//============================