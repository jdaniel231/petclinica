import express from 'express'
import { adminJs, adminJsRouter } from './adminjs'
import { database } from './database'

const app = express()

app.use(express.static('public'))

app.use(adminJs.options.rootPath, adminJsRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
  database.authenticate().then(()=> {
    console.log('BD com sucesso!')
  })
  console.log('Servidor com sucesso!')
})