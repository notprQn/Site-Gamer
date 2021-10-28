const express = require('express')
const app = express()
const port = 3000


app.set('view engine', 'ejs')
app.use(express.static('public'))

// Arquivos
app.get('/', (req,res) => {
    res.render('inicio')
})

app.get('/home', (req,res) => {
    res.render('home')
})

app.get('/preco', (req,res) => {
    res.render('preco')
})

app.get('/tempo', (req,res) => {
    res.render('tempo')
})

app.get('/req', (req,res) => {
    res.render('req')
})

app.get('/t', (req,res) => {
    res.render('t')
})

// Abrindo o servidor
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})  