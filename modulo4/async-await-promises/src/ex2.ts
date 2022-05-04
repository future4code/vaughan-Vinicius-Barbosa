import axios from 'axios'
import { base } from './base';
import { user } from './ex3';



//a. A diferença de uma arrow function para uma funçao nomeada e que 
// uma arrow function encurta mais o codigo sendo mais pratica a sua utilizaçao dentro de uma 
// variavel normalmente e utilizada const

//b. ===================

const getSubscribers = async ():Promise<user[]> => {
   const response = await axios.get(`${base}/subscribers`);

   return response.data;
 };

getSubscribers().then(res => console.log(res))

//============================