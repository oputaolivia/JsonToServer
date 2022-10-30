const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req,res)=>{
    res.writeHead(200, {"Content-Type":"application/json"})
    res.send({
        "slackUsername":"OliviaOputa",
        "backend":true,
        "age":20,
        "bio": "A Backend Developer, with less than a year experience in Node.js"
    })
}).listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`)
})
