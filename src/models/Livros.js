import mongoose from "mongoose"

const Livros = mongoose.model("Livro",{
        titulo : String,
        preco : String,
        autor : String,
        generos : String,
        editora : String,
        idioma : String,
        estado: String,
        descricao: String ,
        capa : String
})

export default Livros







