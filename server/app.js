const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const router = require('./router/routes')

const app = express()

app.use(express.json())
app.use('/api/v1/', router)

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        app.listen(process.env.PORT, () => {
            console.log(`Server is listenning on port: ${process.env.PORT}`)
        })
    } catch (error) {
        console.error('Somethins went wrong')
    }
}

start()