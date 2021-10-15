//caught cotacao banc central

const axios = require('axios')
const url ='https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/aplicacao#!/recursos/CotacaoDolarDia#eyJmb3JtdWxhcmlvIjp7IiRmb3JtYXQiOiJqc29uIiwiJHRvcCI6MTAwLCJkYXRhQ290YWNhbyI6IjA0LTIxLTIwMjAifSwicHJvcHJpZWRhZGVzIjpbMCwxLDJdfQ=='

const GetcotacaoApi = (data) => axios.get(url)
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