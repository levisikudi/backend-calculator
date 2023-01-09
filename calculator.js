const express = require('express')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.urlencoded({extended : true}))

app.get('/',(req, res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) =>{
     
    let num1 = req.body.num1
    let num2 = req.body.num2

    let result = Number(num1) + Number(num2)
    res.send('The final result is ' + result )
})

app.listen(3000, () => {
    console.log(`Server is Listening on 3000`)
})