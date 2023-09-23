import Editoras from "../models/Editoras.js"; 
import EditorasDAO from "../DAO/EditorasDAO.js";
import ValidacaoServicesEditora from "../services/EditorasSevices.js";

class EditorasController {
  /**
   * Método para centralização de rotas no controller
   * @param {Express} app
   */
  static rotas(app) {
    
    /**
     * BUSCA TUDO
     */
    app.get("/editoras", async (req, res) => {
      const editoras = await EditorasDAO.buscarTodasAsEditoras();
      res.status(200).json(editoras);
    });

    /**
     * BUSCA pelo ID  FEITO                    
     */
  app.get("/editoras/:id", async (req, res) => {
    const id = req.params.id;
    // Verifica se a editora com o ID existe
    const isValid = await ValidacaoServicesEditora.validarExistenciaEditora(id);
    if (isValid) {
      // se a editora existe, executa a busca
      const resposta = await EditorasDAO.buscarEditoraPorId(id);
      if (resposta) {
        // se encontrar a editora, retorna os dados dele
        res.status(200).json(resposta);
      } else {
        // se o autor não existe, retorna um erro 404
      res.status(404).json({ error: true, message: `Autor não encontrado para o ID ${id}` });
      }
    } else {
      // se não encontrar a editora (caso inesperado), retorna um erro 500
      res.status(500).json({
        error: true,
        message: `Ocorreu um erro ao buscar o autor com o ID ${id}`,
      });
    }
  });

    /**    
    //* DELETA por ID                     
    */
    app.delete("/editoras/:id", async (req, res) => {
      const id = req.params.id;
      EditorasDAO.deletarEditoraPorId(id);
      res.status(200).json({ error: false });
    });

    /**
     * INSERE                      
     */
    app.post("/editoras", async (req, res) => {
      const body = req.body;
      // Validação dos campos das editoras
      if (!ValidacaoServicesEditora.validaCamposEditora(body)) {
        return res.status(400).json({ error: true, message: "Campos inválidos" });
      }
      const novaEditora = new Editoras(body.NOME, body.EMAIL, body.TELEFONE); // Substitua esses campos pelos campos reais das editoras
      try {
        await EditorasDAO.inserirEditora(novaEditora);
        res.status(201).json({
          error: false,
          message: "Editora inserida com sucesso!",
        });
      } catch (error) {
        res.status(503).json({ error: true, message: "Servidor indisponível no momento" });
      }
    });


    /**
     * ATUALIZA TUDO pelo ID                          
     */
    app.put("/editoras/:id", async (req, res)=>{
      const id = req.params.id
      const body = req.body
      const exists = await ValidacaoServicesEditora.validarExistenciaEditora(id)
      const isValid = ValidacaoServicesEditora.validaCamposEditora(body.NOME, body.EMAIL, body.TELEFONE)
        if(exists){
          if(isValid){
            const editoraAtualizada = new Editoras(body.NOME, body.EMAIL, body.TELEFONE)
            EditorasDAO.AtualizarEditoraPorId(id, editoraAtualizada)
            res.status(204).json({message: `Deu certoooo`})
          } else {
            res.status(400).json({error: true, message: `Campos inválidos`})
          }
              
          } else {
              res.status(404).json({error: true, message: `Editora não encontrada para o id ${id}`})
          }
    })
  }
}

export default EditorasController;
