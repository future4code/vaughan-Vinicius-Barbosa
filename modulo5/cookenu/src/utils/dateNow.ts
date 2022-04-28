const ano = new Date().getFullYear() + ""
const mes = new Date().getMonth() + 1 > 10 ? new Date().getMonth() + 1 + "" : "0" + (new Date().getMonth() + 1)
const dia = new Date().getDate() > 10 ? new Date().getDate() + 1 + "" : "0" + new Date().getDate()
const dia1 = (Number(dia) - 1) + ''

export const dateNow = ano + mes + dia1

