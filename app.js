import express from "express";
import cors from "cors";
import ClientesController from "./src/controllers/ClientesController.js"
import AutoresController from "./src/controllers/AutoresController.js"
import LivrosController from "./src/controllers/LivrosController.js";
import PedidosController from "./src/controllers/PedidosController.js";
import GenerosController from "./src/controllers/GenerosController.js";
import EditorasController from './src/controllers/EditorasController.js'

const app = express()
const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`Servidor disponível em http://localhost:${port}`)
})

app.use(express.json())

AutoresController.rotas(app)
ClientesController.rotas(app)
LivrosController.rotas(app)
PedidosController.rotas(app)
GenerosController.rotas(app)
EditorasController.rotas(app)





app.use(cors('*'))