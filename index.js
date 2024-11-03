const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())

app.get('*', (req, res) => {
    res.sendFile("index.html", {root: path.join(__dirname, "./static")})
})

app.post('/reg-data', (req, res) => {
    console.log(">>>>>>>>", req.body)
    fs.appendFile("data.txt", JSON.stringify(req.body), (err)=>{
        if(err) {
            res.status(500).send("Не получилось зарегистрировать участника :(")
        } else {
            res.status(201).send("Участник успешно зарегистрирован")
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})