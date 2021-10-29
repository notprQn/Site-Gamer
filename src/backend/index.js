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

app.get('/ubisoft', (req,res) => {
    res.render('ubisoft')
})

app.get('/riot', (req,res) => {
    res.render('riot')
})

app.get('/ea', (req,res) => {
    res.render('ea')
})

app.get('/dog', (req,res) => {
    res.render('dog')
})

app.get('/bethesda', (req,res) => {
    res.render('bethesda')
})

// Abrindo o servidor
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})  