const path = require('path')
const express =  require('express')

const app = express()

//view engine stup
app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'hbs')

app.use(express.static('public'))

const middlewareSatu = (req, res, next) => {
    console.log('Middleware pertama')
    next()
}
const middlewareDua = (req, res, next) => {
    console.log('Middleware kedua')
    next()
}
app.use(middlewareSatu)
app.use(middlewareDua)

app.get('/', (request, response) => {
    response.render('index', {
        greetings: 'Hello People!'
    })
})

// app.get('/echo/:name', (req, res) => {
//     res.render('index', {
//         greetings: req.params.name
//     })
// })

// app.get('/pindah', (req, res) =>{
//     res.redirect('http://127.0.0.1:5432/echo/nama')
// })

// app.get('/download/:filename', (req, res) =>{
//     res.sendFile('/Home/fad/Downloads/${filename}.mp3')
// })

app.listen(5432, () =>{
    console.log('Magic happen at http://127.0.0.1:5432/')
})