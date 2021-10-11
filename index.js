const express = require('express')
const app = express()
const path =  require('path')
const convert = require('./lib/convert')

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', ( req, res) => {
     res.render('home')
})

app.get('/cotacao', (req, res) =>{
    const{cotacao, quantidade} = req.query
    
    if(cotacao && quantidade ==''){
    const conversao = convert.convert(cotacao, quantidade) 

    res.render('cotacao', {
        error: false,
        cotacao: convert.Tomoney(cotacao),
        quantidade: convert.Tomoney(quantidade),
        conversao: convert.Tomoney(conversao)
    })
    }else{
        res.render('cotacao', {
            error: 'Valores inválidos!!!'
        })
    }
})

app.listen(3000, err => {
    if(err){
        console.log('err in the page')
    }else{
        console.log('convert my money is on')
    }
})