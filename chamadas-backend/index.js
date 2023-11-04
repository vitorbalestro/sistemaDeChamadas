require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const turmaRouter = require('./controllers/turma')
const presencaRouter = require('./controllers/presenca')
const loginRouter = require('./controllers/login')

app.use(cors())
app.use(express.json())


app.use('/api/turma', turmaRouter)
app.use('/api/presenca', presencaRouter)
app.use('/api/login',loginRouter)

const PORT = process.env.PORT
console.log(PORT)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})