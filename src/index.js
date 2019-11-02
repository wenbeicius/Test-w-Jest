const express = require ('express')
const bodyParser = require ('body-parser')
const app = express()


app.use(bodyParser.json())

app.get('/', function(request,response,next){
    response.status(200).json({
        msg: 'hello world'
    })
})
module.exports=app