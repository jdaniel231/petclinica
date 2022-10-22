import express from 'express'
import { database } from './database'

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
  database.authenticate().then(()=> {
    console.log('BD com sucesso!')
  })
  console.log('Servidor com sucesso!')
})