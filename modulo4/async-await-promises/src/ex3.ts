//a. Se apenas trocarmos o retorno da função para: Promise<user[]> , teremos algum
// erro de tipagem?
// Nao teremos um erro de tipagem

import axios from "axios";
import { base } from "./base";


//b. É boa prática fazermos um mapeamento do resultado de uma Promise, caso seja indicado
// que ela retorne um Promise<any>. Explique com as suas palavras o porquê de fazermos isso
// Facil de econtrar erros

//c. Reimplemente a função, corretamente.

export type user = {
	id: string;
	name: string;
	email: string;
}

const getSubscribers = async (): Promise<user[]> => {
  const response = await axios.get(`${base}/subscribers`);
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

getSubscribers().then(res => console.log(res))
