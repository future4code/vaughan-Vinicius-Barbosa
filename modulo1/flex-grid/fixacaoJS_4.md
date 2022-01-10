<h1>Exercicio de fixação JS</h1>

```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    const array = arrayDeNumeros
    const valor = numeroEscolhido

    let opa = (array, valor) =>
        array.reduce((acom, item) => {
            let bol = valor === item
            if (bol === true) {

                return acom + 1
            } else {
                return acom
            }

        }, 0)

    let resultado = opa(array, valor)
    if (resultado === 0) {
        return `Número não encontrado`
    } else {
        return `O número ${valor} aparece ${resultado}x`
    }

}
```