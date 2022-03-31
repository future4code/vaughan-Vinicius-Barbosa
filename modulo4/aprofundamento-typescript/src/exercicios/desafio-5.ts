
type cadastrados = {
   nome: string,
   idade: number,
   dataDaConsulta: string,
}

const nomes:cadastrados[] = [
    { nome: "Aoão", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Cedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Baula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Dárcia", idade: 45, dataDaConsulta: "04/05/2021" }
]

const ordenado:object[] = nomes.sort((a:cadastrados, b:cadastrados):number => {
        if (a.nome< b.nome) 
            return -1;
        if (a.nome>b.nome) 
            return 1;
        return 0
})


console.log(ordenado)