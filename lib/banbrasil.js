//caught cotacao banc central

const axios = require('axios')
const geturl = data => `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${data}'&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`
const GetcotacaoApi = url => axios.get(url) // turned of async await
const extract = res => res.data.value[0].cotacaoVenda
const getToday = () =>{
    const Today = new Date()
    return (Today.getMonth()+1)+'-'+Today.getDate()+'-'+Today.getFullYear()
    //console.log(Today.getDate(), Today.getFullYear(), Today.getMonth())
}
const Getcotacao=(getToday, geturl, GetcotacaoApi,extract) => async () => {
    try{    
    const tomorrow = getToday()
    
    const url = geturl(tomorrow)
    const res = await GetcotacaoApi(url)
    const cotacao = extract(res)
    return cotacao
    }catch(err){
        return ""
    }
 }


module.exports = {
    GetcotacaoApi,
    Getcotacao: Getcotacao({getToday,geturl,GetcotacaoApi,extract}),
    extract,
    geturl,
    getToday,
    pure: {
        Getcotacao
    }
}