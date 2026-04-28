// 1
function verlogin() {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    if (usuario === "aluno@test.com" && senha === "1234") {
        document.getElementById("mensagem1").value = "login com sucesso"
    } else {
        document.getElementById("mensagem1").value = "usuário/senha incorretos";
    }
}
function limpar() {
    document.getElementById("usuario").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("mensagem1").valeu = "";
}
// 1
// 2
function vIdade() {
    let idade = document.getElementById("idade").value;
    if (idade >= 18) {
        document.getElementById("mensagem2").value = "você pode dirigir"
    } else {
        document.getElementById("mensagem2").value = "você não pode dirigir"
    }
}
function limpar2() {
    document.getElementById("idade").value = "";
    document.getElementById("mensagem2").value = "";
}
// 2
// 3
function vVoto() {
    let idade = parseInt(document.getElementById("idade2").value);
    if (idade >= 16) {
        document.getElementById("resultado").value = "pode votar";
    } else {
        document.getElementById("resultado").value = "não pode votar"
    }
}
function limpar3() {
    document.getElementById("idade2").value = "";
    document.getElementById("resultado").value = "";
}
// 3
// 4
function calcMedia() {
    let n1 = parseFloat(Document.getElementById("nota1").value);
    let n2 = parseFloat(Document.getElementById("nota2").value);
    let media = (n1 + n2) / 2;

    document.getElementById("result2").value = media.toFixed(2);

    if (media >= 6) {
        document.getElementById("result2").value = "Aprovado";
    } else {
        document.getElementById("result2").value = "Reprovado";
    }
}
function limpar4() {
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("result2").value = "";
    document.getElementById("situacao").value = "";
}
// 4
// 5
function vSenha() {
    let senha = document.getElementById("senha2").value;
    if (senha === "1234") {
        document.getElementById("resultado3").value = "Acesso Permitido"
    } else {
        document.getElementById("resultado3").value = "Senha Incorreta"
    }
}

function limpar5() {
    document.getElementById("senha2").value = "";
    document.getElementById("resultado3").value = "";

}
// 5
// 6
function calcSalario() {
    let sbruto = document.getElementById("sbruto").value;
    if (sbruto <= 1621) {
        let vdesconto = 7.5 / 100 * sbruto;
        let sliquido = sbruto - vdesconto;
        document.getElementById("vdesconto").value = vdesconto.toFixed(2);
        document.getElementById("sliquido").value = sliquido.toFixed(2);
    } else if (sbruto <= 2902.84) {
        let vdesconto = 9 / 100 * sbruto;
        let sliquido = sbruto - vdesconto;
        document.getElementById("vdesconto").value = vdesconto.toFixed(2);
        document.getElementById("sliquido").value = sliquido.toFixed(2);
    } else if (sbruto <= 4354.27) {
        let vdesconto = 12 / 100 * sbruto;
        let sliquido = sbruto - vdesconto;
        document.getElementById("vdesconto").value = vdesconto.toFixed(2);
        document.getElementById("sliquido").value = sliquido.toFixed(2);
    } else {
        let vdesconto = 14 / 100 * sbruto;
        let sliquido = sbruto - vdesconto;
        document.getElementById("vdesconto").value = vdesconto.toFixed(2);
        document.getElementById("sliquido").value = sliquido.toFixed(2);
    }
}

function limpar6() {
    document.getElementById("vdesconto").value = "";
    document.getElementById("sliquido").value = "";
    document.getElementById("sbruto").value = "";

}
// 6

