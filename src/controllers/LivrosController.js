import LivrosRepository from "../Repository/LivrosRepository.js";
import LivrosServices from "../Services/LivrosServices.js";

class LivrosController {
  static rotas(app) {


    app.get("/livros", async (req, res) => {
      try {
          const livros = await LivrosRepository.buscarTodosOsLivros()
          res.status(200).json(livros)
      } catch (erro) {
          res.status(404).json(erro.message)
      }
  })


  app.post("/livros", async (req, res) => {
    try {
        LivrosServices.validaCamposLivro(req.body.titulo, req.body.preco, req.body.idioma);
        const livro = req.body;
        const inserir = await LivrosRepository.inserirLivro(livro);
        res.status(201).json(inserir);
    } catch (erro) {
        res.status(400).json({ message: erro.message });
    }
});


    app.get("/livros", async (req, res) => {
      try {
        const livros = await LivrosRepository.buscarTodosOsLivros();
        res.status(200).json(livros)
      } catch (error) {
        res.status(404).json(error.message)
      }
    });


    app.get("/livros/:id", async (req, res) => {
      try {
          const livro = await LivrosRepository.buscarLivroPorId(req.params.id)
          if (!livro) {
              throw new Error("Id do livro está inválido ou não cadastrado")
          }
          res.status(200).json(livro)
      } catch (erro) {
          res.status(404).json({ message: erro.message, id: req.params.id })
      }
  })


    app.patch("/livros/:id", async (req, res) => {
      try {
          const livro = await LivrosRepository.buscarLivroPorId(req.params.id)
          if (!livro) {
              throw new Error("ID do livro não encontrado")
          }
          const data = req.body
          if (data._id || data.__v){
              throw new Error("Contém um atributo que não pode ser alterado")
          }
          if (data.nome){
              LivrosServices.validaTitulo(data.titulo)
          }
          if (data.endereco){
            LivrosServices.validaPreco(data.preco)
          }
          if (data.telefone){
            LivrosServices.validaIdioma(data.idioma)
          }
          await LivrosRepository.atualizarLivroPorId(req.params.id, data)
          res.status(200).json({ message: "Livro atualizado com sucesso" })
      } catch (erro) {
          res.status(400).json({ message: erro.message, id: req.params.id })
      }
  })


    app.delete("/livros/:id", async (req, res) => {
      const id = req.params.id;
      try {
          const response = await LivrosRepository.deletarLivroPorId(id)
          res.status(200).json(response)
      } catch (error) {
          res.status(404).json({ error: true, message: `Livro não encontrado para o ID ${id}` });
      }
  });

  }
}

export default LivrosController;