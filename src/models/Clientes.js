import mongoose from "mongoose"

const Clientes  = mongoose.model("Cliente", {
        nome : String, 
        email : String, 
        telefone : String, 
        endereco : String,
        senha : String
})

export default Clientes