require('dotenv').config()

const express = require('express') //исполняемая скриптом программа (dev)
const sequelize = require('./db')
const models = require('./models/models.js')
const cors = require('cors')

const PORT = process.env.PORT || 5001;

const app = express()
app.use(cors())
app.use(express.json())

// app.get('/', (reg, res) => {
//     res.status(200).json({message: 'WORKING!'})
// })

//функция для подключения к базе данных
const start = async () =>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }
    catch (e){
        console.log(e)
    }
}

start()