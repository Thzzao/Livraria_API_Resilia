import PedidosRepository from "../Repository/PedidosRepository.js";
import PedidosServices from "../Services/PedidosServices.js";

class PedidosController {
  static rotas(app) {


    app.post("/pedidos", async (req, res) => {
      try {
        await PedidosServices.validaCamposPedido(req.body.quantidade, req.body.pagamento)

        const pedido = req.body

        const inserir = await PedidosRepository.inserirPedido(pedido)

        res.status(201).json(inserir)
      } catch (error) {
        if (error.message == "Pedido já cadastrado.") {
          res.status(406).json({ message: error.message })
        }

        res.status(400).json({ message: error.message })
      }
    });

    app.get("/pedidos", async (req, res) => {
      try {
        const pedidos = await PedidosRepository.buscarTodosOsPedidos();
        res.status(200).json(pedidos)
      } catch (error) {
        res.status(404).json(error.message)
      }
    });


    app.get("/pedidos/:id", async (req, res) => {
      try {
        const pedido = await PedidosRepository.buscarPedidoPorId(req.params.id)
        if (!pedido._id) {
          throw new Error("Pedido não encontrado para esse id")
        }
        res.status(200).json(pedido)

      } catch (error) {
        res.status(404).json({ message: error.message, id: req.params.id })
      }
    });


    app.put("/pedidos/:id", async (req, res) => {
      const id = req.params.id
      const body = Object.entries(req.body)
      try {
        const pedido = req.body
        if (!pedido._id) {
          throw new Error("Pedido não encontrado para esse id")
        }
        body.forEach((elemento) => pedido[elemento[0]] = elemento[1])

        delete pedido._id

        PedidosServices.validaCamposPedido(pedido.quantidade, pedido.pagamento)
        const resposta = await PedidosRepository.atualizaPedidoPorId(id, pedido)

        res.status(200).json(resposta)
      } catch (error) {
        res.status(400).json({ message: error.message, id })
      }
    })

    app.delete("/pedidos/:id", async (req, res) => {
      const id = req.params.id;
      try {
        const pedido = await PedidosRepository.buscarPedidoPorId(id);
        if (!pedido._id) {
          o
          throw new Error("Pedido não encontrado")
        }
        const response = await PedidosRepository.deletarPedidoPorId(id)
        res.status(200).json(response)
      } catch (error) {
        res.status(404).json({ error: true, message: `Pedido não encontrado para o ID ${id}` });
      }
    });
  }
}

export default PedidosController;
