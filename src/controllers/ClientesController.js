import ClientesRepository from "../Repository/ClientesRepository.js";
import ClientesServices from "../Services/ClientesServices.js";
import Clientes from "../models/Clientes.js";

class ClientesController {
    static rotas(app) {

        app.get("/clientes", async (req, res) => {
            try {
                const clientes = await ClientesRepository.buscarTodosClientes()
                res.status(200).json(clientes)
            } catch (erro) {
                res.status(404).json(erro.message)
            }
        })

        app.get("/clientes/:id", async (req, res) => {
            try {
                const cliente = await ClientesRepository.buscarClientePorId(req.params.id)
                if (!cliente) {
                    throw new Error("Id do cliente está inválido ou não cadastrado")
                }
                res.status(200).json(cliente)
            } catch (erro) {
                res.status(404).json({ message: erro.message, id: req.params.id })
            }
        })

        app.post("/clientes", async (req, res) => {
            try {
                // ClientesServices.validaCamposCliente(req.body.nome, req.body.endereco, req.body.telefone, req.body.email);
                const cliente = req.body;
                const inserir = await ClientesRepository.criarCliente(cliente);
                res.status(201).json(inserir);
            } catch (erro) {
                res.status(400).json({ message: erro.message });
            }
        });

        app.patch("/clientes/:id", async (req, res) => {
            try {
                const cliente = await ClientesRepository.buscarClientePorId(req.params.id)
                if (!cliente) {
                    throw new Error("ID do cliente não encontrado")
                }
                const data = req.body
                if (data._id || data.__v){
                    throw new Error("Contém um atributo que não pode ser alterado")
                }
                if (data.nome){
                    ClientesServices.validaNome(data.nome)
                }
                if (data.endereco){
                    ClientesServices.validaEndereco(data.endereco)
                }
                if (data.telefone){
                    ClientesServices.validaTelefone(data.telefone)
                }
                if (data.email){
                    ClientesServices.validaEmail(data.email)
                }
                await ClientesRepository.atualizarClientePorId(req.params.id, data)
                res.status(200).json({ message: "Cliente atualizado com sucesso" })
            } catch (erro) {
                res.status(400).json({ message: erro.message, id: req.params.id })
            }
        })

        app.delete("/clientes/:id", async (req, res) => {
            const id = req.params.id;
            try {
                const response = await ClientesRepository.deletarClientePorId(id)
                res.status(200).json(response)
            } catch (error) {
                res.status(404).json({ error: true, message: `Cliente não encontrado para o ID ${id}` });
            }
        });
    }
}

export default ClientesController;
