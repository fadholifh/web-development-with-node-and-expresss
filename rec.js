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
    response.send('Hello F4d!')
})

app.get('/echo/:name', (req, res) => {
    res.send('This si from /echo route. Hello: "'+ req.params.name +'"')
})

app.get('/pindah', (req, res) =>{
    res.redirect('http://127.0.0.1:5432/echo/nama')
})

app.get('/download/:filename', (req, res) =>{
    res.sendFile('/Home/fad/Downloads/${filename}.mp3')
})