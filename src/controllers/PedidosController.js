import Pedidos from "../models/Pedidos.js";
import PedidosDAO from "../DAO/PedidosDAO.js";
import ValidacaoServicesPedidos from "../services/PedidosServices.js";

class PedidosController {
  /**
   *
   * @param {Express} app
   */

  static rotas(app) {
    /**
     * BUSCA TODOS os PEDIDOS
     */
    app.get("/pedidos", async (req, res) => {
      try {
        const pedidos = await PedidosDAO.buscarTodosOsPedidos();
        res.status(200).json(pedidos);
      } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({
            error: true,
            message: "Nenhum pedido encontrado",
            details: error.message,
          });
        } else {
          res.status(500).json({
            error: true,
            message: "Ocorreu um erro ao buscar os pedidos.",
          });
        }
      }
    });

    /**
     * BUSCA pelo ID                FEITO
     */
    app.get("/pedidos/:id", async (req, res) => {
      const id = req.params.id;
      // Verifica se o pedido com o ID existe
      const isValid = await ValidacaoServicesPedidos.validarExistenciaPedido(
        id
      );
      if (isValid) {
        // se o pedido existe, executa a busca
        const resposta = await PedidosDAO.buscarPedidoPorId(id);
        if (resposta) {
          // se encontrar o pedido, retorna os dados dele
          res.status(200).json(resposta);
        } else {
          // se o pedido não existe, retorna um erro 404
          res
            .status(404)
            .json({
              error: true,
              message: `Pedido não encontrado para o ID ${id}`,
            });
        }
      } else {
        // se não encontrar o pedido (caso inesperado), retorna um erro 500
        res.status(500).json({
          error: true,
          message: `Ocorreu um erro ao buscar o pedido com o ID ${id}`,
        });
      }
    });

    /**
     * BUSCA pelo pagto
     */
    app.get("/pedidos/pagamento/:pagamento", async (req, res) => {
      const pagamento = req.params.pagamento;
      const resposta = await PedidosDAO.buscarPedidosPorPagamento(pagamento);
      if (resposta) {
        res.status(200).json(resposta);
      } else {
        res.status(404).json({
          error: true,
          message: `Não encontramos pedidos com o pagamento ${pagamento}`,
        });
      }
    });

    /**
     * DELETA por ID                      ///////////SEM VALIDAÇÃO TA FUNCIONANDO --- MAS DA PRA MELHORAR A RESPOSTA
     */
    app.delete("/pedidos/:id", async (req, res) => {
      const id = req.params.id;
      PedidosDAO.deletarPedidoPorId(id);
      res
        .status(200)
        .json({ error: false, message: `Livro excluído com sucesso!` });
    });

    /**
     * INSERE
     */
    app.post("/pedidos", async (req, res) => {
      const body = req.body;

      if (
        !ValidacaoServicesPedidos.validaCamposPedido(
          body.TITULO,
          body.PAGAMENTO
        )
      ) {
        return res
          .status(400)
          .json({ error: true, message: `Campos inválidos` });
      }
      try {
        const exists = await ValidacaoServicesPedidos.validarExistenciaPedido(
          body.ID
        );
        if (exists) {
          const pedidoModelado = new Pedidos(
            body.ID,
            body.CLIENTE,
            body.TITULO,
            body.QUANTIDADE,
            body.VALOR,
            body.PAGAMENTO
          );
          await PedidosDAO.inserirPedido(pedidoModelado);
          res.status(201).json({
            message: "Pedido criado com sucesso!",
          });
        } else {
          res
            .status(400)
            .json({ error: true, message: `Pedido não encontrado` });
        }
      } catch (error) {
        console.error("Erro no servidor:", error);
        res
          .status(503)
          .json({ error: true, message: `Servidor indisponível no momento` });
      }
    });

    // /**
    //  * ATUALIZA por ID
    //  */
    app.put("/pedidos/:id", async (req, res) => {
      const id = req.params.id;
      const body = req.body;
      const exists = await ValidacaoServicesPedidos.validarExistenciaPedido(id);
      const isValid = ValidacaoServicesPedidos.validaCamposPedido(
        body.TITULO,
        body.PAGAMENTO
      );
      if (exists) {
        if (isValid) {
          const pedidoAtualizado = {
            CLIENTE: body.CLIENTE,
            TITULO: body.TITULO,
            QUANTIDADE: body.QUANTIDADE,
            VALOR: body.VALOR,
            PAGAMENTO: body.PAGAMENTO,
          };
          await PedidosDAO.atualizarPedidoPorId(id, pedidoAtualizado);
          res
            .status(204)
            .json({ error: false, message: `Pedido atualizado com sucesso!` });
        } else {
          res.status(400).json({ error: true, message: `Campos inválidos` });
        }
      } else {
        res.status(404).json({
          error: true,
          message: `Pedido não encontrado para o ID ${id}`,
        });
      }
    });
  }
}

export default PedidosController;
