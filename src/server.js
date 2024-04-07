const express = require('express')
const fs = require('fs')
const path = require('path')

const file = 'result.json'

const filePath = path.join(__dirname, '../' ,file)

const app = express()
const readStream = fs.createReadStream(filePath)

app.use(express.json())

app.get('/', (req, res)=>{

    let customers = ''

    readStream.on('data', (chunk)=>{
        customers += chunk.toString()
    })

    readStream.on('end', ()=>{
        const data = JSON.parse(customers.toString())

        res.send(data) 
    })
})

app.listen(4200, ()=>{
    console.log('running on port 4200')
})