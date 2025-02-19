// API significa Application Programing Interface
// POST, GET, PUT, DELETE
// CRUD - Create Read Update Delete 
// Endpoint
// Middleware

import express from "express"
import cors from "cors"
import { db } from "./connect.js"

const app = express()
const PORT = 3000

app.use(cors())

app.get('/', (request, response) => {
    response.send("Só vamos trabalhar com os endpoints '/artist' e '/songs'")
})

app.get('/artist', async (request, response) => {
    response.send(await db.collection("artist").find({}).toArray())
})

app.get('/songs', async (request, response) => {
    response.send(await db.collection("songs").find({}).toArray())
})

app.listen(PORT, () => {
    console.log(`servidor esta escutando na porta ${PORT}`)
})