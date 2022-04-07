const anoCheck = new Date().getFullYear() - 18 + ""
const ano1 = new Date().getFullYear() + ""
const mes1 = new Date().getMonth() + 1 > 10 ? new Date().getMonth() + 1 + "" : "0" + (new Date().getMonth() + 1)
const dia1 = new Date().getDate() > 10 ? new Date().getDate() + 1 + "" : "0" + new Date().getDate()

export const dateNowCheck = anoCheck + mes1 + dia1
export const dateNow = ano1 + mes1 + dia1
export const dateNowBR = dia1 + mes1 + ano1