import Clientes from "../models/Clientes.js"; // NÃO UTILIZADO AINDA

class ClientesController {

  static rotas(app) {
    app.get("/", (req, res)=>{      
      res.status(200).json("tá funcionando, confia")
    })
    
    app.post("/clientes", (req, res) => {
        const body = req.body;
        console.log(body);
        res.status(200).json(body);
      });
  }
}

export default ClientesController


