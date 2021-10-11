const convert = (quantidade, cotacao) =>{
    return cotacao * quantidade
}

const Tomoney = valor => {
    return parseFloat(valor).toFixed(2)
}


module.exports = {
    convert,
    Tomoney
}