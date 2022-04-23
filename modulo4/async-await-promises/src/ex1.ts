import axios from 'axios'
import { base } from './base';



//a. Qual endpoint você deve utilizar para isso?
//GET/subscribers

//b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
// por meio dos tipos em typescript


async function getSubscribers(): Promise<any[]> {
   const response = await axios.get(`${base}/subscribers`);

   return response.data;
 };

getSubscribers().then(res => console.log(res))