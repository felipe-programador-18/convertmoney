//caught cotacao banc central

const axios = require('axios')
const url = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='10-14-2021'&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao"




const GetcotacaoApi = (data) => axios.get(url) // turned of async await
const extract = res => res.data.value[0].cotacaoVenda


const Getcotacao = async () => {
    const res = await GetcotacaoApi('')
    const cotacao = extract(res)
    return cotacao
 }


module.exports = {
    GetcotacaoApi,
    Getcotacao,
    extract
}