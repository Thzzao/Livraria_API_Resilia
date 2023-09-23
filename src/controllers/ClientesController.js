import Clientes from "../models/Clientes.js";
import ClientesDAO from "../DAO/ClientesDAO.js";
import ValidacaoServicesCliente from "../services/ClientesServices.js";

class ClientesController {
  /**
   *
   * @param {Express} app
   */

  static rotas(app) {
    /**
     * BUSCA TODOS os CLIENTES
     */
    app.get("/clientes", async (req, res) => {
      try {
        const clientes = await ClientesDAO.buscarTodosOsClientes();
        res.status(200).json(clientes);
      } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({
            error: true,
            message: "Nenhum autor encontrado", //mas dai aqui tem q ter outra msg
            details: error.message, // detalhes do erro?? pensar nisso!!!!!!!!
          });
        } else {
          res.status(500).json({
            error: true,
            message: "Ocorreu um erro ao buscar os clientes.",
          });
        }
      }
    });

    /**
     * BUSCA CLIENTES por ID  FEITO
     */
    app.get("/clientes/:id", async (req, res) => {
      const id = req.params.id;
      // Verifica se o cliente com o ID existe
      const isValid = await ValidacaoServicesCliente.validarExistenciaCliente(
        id
      );
      if (isValid) {
        // se o cleinte existe, executa a busca
        const resposta = await ClientesDAO.buscarClientePorId(id);
        if (resposta) {
          // se encontrar o cliente, retorna os dados dele
          res.status(200).json(resposta);
        } else {
          // se o cliente não existe, retorna um erro 404
          res.status(404).json({
            error: true,
            message: `Cliente não encontrado para o ID ${id}`,
          });
        }
      } else {
        // se não encontrar o cliente (caso inesperado), retorna um erro 500
        res.status(500).json({
          error: true,
          message: `Ocorreu um erro ao buscar o cliente com o ID ${id}`,
        });
      }
    });

    /**
     * DELETA por ID
     */
    app.delete("/clientes/:id", async (req, res) => {
      const id = req.params.id;
      // verifica se o cliente com o ID especificado existe
      const isValid = await ValidacaoServicesCliente.validarExistenciaCliente(
        id
      );
      if (isValid) {
        // se o cliente existe, execute a exclusão
        await ClientesDAO.deletarClientePorId(id);
        res
          .status(200)
          .json({ error: false, message: `Cliente excluído com sucesso!` });
      } else {
        // se o cliente não existe, retorne um erro 404
        res.status(404).json({
          error: true,
          message: `Cliente não encontrado para o ID ${id}`,
        });
      }
    });

    /**
     * INSERE
     */
    app.post("/clientes", async (req, res) => {
      const body = req.body;
      if (
        !ValidacaoServicesCliente.validaCamposCliente(
          body.NOME,
          body.EMAIL,
          body.TELEFONE,
          body.ENDERECO
        )
      ) {
        return res
          .status(400)
          .json({ error: true, message: "Campos inválidos" });
      }
      try {
        await ClientesDAO.inserirCliente(body);
        res.status(201).json({
          error: false,
          message: "Cliente inserido com sucesso!",
        });
      } catch (error) {
        console.error("Erro no servidor:", error);
        res
          .status(503)
          .json({ error: true, message: "Servidor indisponível no momento" });
      }
    });

    // /**
    //  * ATUALIZA TUDO por ID
    //  */
    app.put("/clientes/:id", async (req, res) => {
      const id = req.params.id;
      const body = req.body;
      const exists = await ValidacaoServicesCliente.validarExistenciaCliente(
        id
      );
      const isValid = ValidacaoServicesCliente.validaCamposCliente(
        body.NOME,
        body.EMAIL,
        body.TELEFONE,
        body.ENDERECO
      );
      if (exists) {
        if (isValid) {
          const clienteAtualizado = new Clientes(
            body.NOME,
            body.EMAIL,
            body.TELEFONE,
            body.ENDERECO
          );
          ClientesDAO.atualizarClientePorId(id, clienteAtualizado);
          res.status(204).json({ error: false, message: `Deu certoooo` });
        } else {
          res.status(400).json({ error: true, message: `Campos invalidos` });
        }
      } else {
        res.status(404).json({
          error: true,
          message: `Usuário não encontrado para o id ${id}`,
        });
      }
    });
  }
}

export default ClientesController;
