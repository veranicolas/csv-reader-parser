const fs = require('fs')
const path = require('path')

const file = 'customers-1000.csv'

const filePath = path.join(__dirname, 'datasets/' ,file)

const readStream = fs.createReadStream(filePath, { encoding:'utf8' })

let result = ''

readStream.on('data', (chunk)=>{
    result = result.concat(...chunk.toString())
})

readStream.on('end', ()=>{
    // const data = chunk.split('Website')
    const array = result.split('\r\n')

    const columnHeaders = array[0].split(',')

    array.shift()
    array.pop()

    const users = array.map((item)=>{
        const userData = item.split(',')
        let finalUser = {}

        columnHeaders.forEach((value, index)=>{
            return finalUser[value] = userData[index]
        })

        return finalUser
    })

    fs.writeFile('result.json', JSON.stringify(users), 'utf8' , (error)=>{
        if(error){
            console.log('something happened', error)
        } else {
            console.log('success')
        }
    })

    // console.log(columnHeaders)
    console.log('end of stream')
})

