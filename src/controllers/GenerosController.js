import Generos from '../models/Generos.js'
import GenerosDAO from '../DAO/GenerosDAO.js';
import ValidacaoServicesGeneros from '../Services/GenerosServices.js';

class GenerosController {
  /**
   * Método para centralização de rotas no controller
   * @param {Express} app
   */
  static rotas(app) {
    /**
     * BUSCA TODOS OS GÊNEROS
     */
    app.get("/generos", async (req, res) => {
      try {
        const generos = await GenerosDAO.buscarTodosOsGeneros();
        res.status(200).json(generos);
      } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({
            error: true,
            message: "Nenhum gênero encontrado",
            details: error.message,
          });
        } else {
          res.status(500).json({
            error: true,
            message: "Ocorreu um erro ao buscar os gêneros.",
          });
        }
      }
    })

    
    /**
     * BUSCA GÊNEROS POR ID      FEITO                     
     */
    app.get("/generos/:id", async (req, res) => {
      const id = req.params.id;
      const isValid = await ValidacaoServicesGeneros.validarExistenciaGenero(id);
      if (isValid) {
        const resposta = await GenerosDAO.buscarGeneroPorId(id);
        if (resposta) {
          res.status(200).json(resposta);
        } else {
          res.status(500).json({
            error: true,
            message: `Ocorreu um erro ao buscar o gênero com o ID ${id}`,
          });
        }
      } else {
        res.status(404).json({ error: true, message: `Gênero não encontrado para o ID ${id}` });
      }
    });




    /**    
    * DELETA GÊNEROS POR ID                     
    */
    app.delete("/generos/:id", async (req, res) => {
      const id = req.params.id;
      const isValid = ValidacaoServicesGeneros.validarExistenciaGenero(id);
      try {
        if (isValid) {
          await GenerosDAO.deletarGeneroPorId(id);
          res.status(200).json({ error: false, massage: `Gênero com o ID ${id} deletado!` });
        } else {
          res.status(404).json({ error: true, message: `Gênero não encontrado para o ID ${id}` });
        }
      } catch (error) {
        res.status(500).json({ error: true, message: `Ocorreu um erro durante a exclusão do gênero` });
      }
    });
    /**
     * INSERE GÊNEROS                     
     */
    app.post("/generos", async (req, res) => {
      const body = req.body;
      if (!ValidacaoServicesGeneros.validarExistenciaGenero(body.NOME)) {
        return res.status(400).json({ error: true, message: `Campo inválido` });
      }
      try {
        const validaGenero = await ValidacaoServicesGeneros.validarExistenciaGenero(body.ID);
        if (!validaGenero) {
          return res.status(404).json({ error: true, message: `Gênero não encontrado` });
        } else {
          return res.status(201).json({ error: true, message: `Gênero criado com sucesso!` });
        }
      } catch (error) {
        res
          .status(503)
          .json({ error: true, message: `Forneça um gênero` });
      }
    });
    

    /**
     * ATUALIZA TUDO pelo ID                          
     */
    app.put("/generos/:id", async (req, res)=>{
      const id = req.params.id
      const body = req.body
      const exists = await ValidacaoServicesGeneros.validarExistenciaGenero(id)
      const isValid = ValidacaoServicesGeneros.validaNome(body.NOME)
        if(exists){
          if(isValid){
            const generoAtualizado = new Generos(body.LIVROS, body.NOME)
            GenerosDAO.AtualizarGeneroPorId(id, generoAtualizado)
            res.status(204).json({error: false, message: `Gênero atualizado com sucesso!`})
          } else {
            res.status(400).json({error: true, message: `Campos inválidos`})
          }
              
          } else {
              res.status(404).json({error: true, message: `Gênero não encontrado para o ID ${id}`})
          }
    })
  }
}
export default GenerosController;
