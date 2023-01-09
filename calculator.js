const express = require('express')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.urlencoded({extended : true}))

app.get('/',(req, res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) =>{
    res.send('Thank for posting that')
})

app.listen(3000, () => {
    console.log(`Server is Listening on 3000`)
})