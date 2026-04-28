function verificarTime() {
    let time = Number(document.getElementById("time").value);
    let mensagem = "";

    switch (time) {
        case 1:
            mensagem = "Você Escolheu o Sport";
            break;
        case 2:
            mensagem = "Você Escolheu o Santa Cruz";
            break;
        case 3:
            mensagem = "Você Escolheu o Náutico";
            break;
        default:
            mensagem = "Código Inválido";
    }
    document.getElementById("resultado1").value = mensagem;
}

function limpar() {
    document.getElementById("resultado1").value = "";
}

function verificarPedido() {
    let produto = Number(document.getElementById("produto").value);
    let mensagem = "";

    switch (produto) {
        case 1:
            mensagem = "Você Escolheu Hambúrguer";
            break;
        case 2:
            mensagem = "Você Escolheu Pizza";
            break;
        case 3:
            mensagem = "Você Escolheu Refrigerante";
            break;
        default:
            mensagem = "Código Inválido";
    }
    document.getElementById("resultado2").value = mensagem;
}

function limpar2() {
    document.getElementById("resultado2").value = "";
}

function calcular() {
    let produto = Number(document.getElementById("produto_compra").value);
    let quantidade = Number(document.getElementById("quantidade").value);

    let nome = "";
    let preco = 0;
    let total = 0;
    let mensagem = "";

    switch (produto) {

        case 1:
            nome = "Hambúrguer";
            preco = 10;

            total = preco * quantidade

            if (quantidade >= 3) {
                mensagem = "Você Ganhou Desconto";
                total = total * 0.9;
            } else {
                mensagem = "Compre 3 ou mais para ganhar Desconto!";
            }
            break;

        case 2:
            nome = "Pizza";
            preco = 20;

            total = preco * quantidade;

            if (quantidade >= 2) {
                mensagem = "Frete grátis";
            } else {
                mensagem = "Frete será cobrado";
            }
            break;

        case 3:
            nome = "Refrigerante";
            preco = 5;

            total = preco * quantidade;

            if (quantidade >= 5) {
                mensagem = "Leve 5 e pague 4";
                total = preco * (quantidade - 1);
            } else {
                mensagem = "Promoção a partir de 5 unidades";
            }
            break;

        default:
            mensagem = "Produto inválido";

    }

    document.getElementById("rCompra").innerHTML =
        "Produto: " + nome + "<br>" +
        "Quantidade: " + quantidade + "<br>" +
        "Total: R$ " + total.toFixed(2) + "<br>" +
        mensagem;

}

function limpar3() {
    document.getElementById("rCompra").innerHTML = "";
}



































































