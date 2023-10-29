import mongoose from "mongoose"

const Pedidos = mongoose.model("Pedido",{
        cliente : String,
        titulo : String,
        quantidade : String, 
        valor: String,
        pagamento : String
})

export default Pedidos












