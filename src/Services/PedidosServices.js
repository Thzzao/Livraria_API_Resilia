
class PedidosServices {
    static validaQuantidade(quantidade) {
        if (typeof quantidade === "number" && quantidade > 0) {
            return true;
        } else {
            throw new Error("Entrada inválida.");
        }
    }

    static validaPagamento(pagamento) {
        const opcoesValidas = ["Boleto", "PIX", "Crédito", "Débito"];
        if (opcoesValidas.includes(pagamento)) {
            return true
        }
        throw new Error("O pagamento deve ser Boleto, PIX, Crédito ou Débito.")
    }

    static validaCamposPedido(quantidade, pagamento) {
        try {
            PedidosServices.validaQuantidade(quantidade)
            PedidosServices.validaPagamento(pagamento);
        } catch (error) {
            throw error
        }
    }
}

export default PedidosServices;
