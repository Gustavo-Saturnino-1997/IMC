const nome = localStorage.getItem("nome");
const imc = parseFloat(localStorage.getItem("calculadora"));

const textoParaoUsuario = document.createElement("p");

textoParaoUsuario.innerText = `Olá ${nome}, seu Índice de Massa Corporal é de ${imc} %`;

document.querySelector("#resultado").appendChild(textoParaoUsuario);

function linhaCorrepondente(id1, id2) {
    const idImc = document.querySelector(id1).style.backgroundColor = "rgb(237, 201, 118)";
    const idClassificacao = document.querySelector(id2).style.backgroundColor = "rgb(237, 201, 118)";
    return idImc, idClassificacao;
}

if (imc < 18.5) {
    linhaCorrepondente("#imc-abaixo-do-peso", "#Classificação-abaixo-do-peso");
}

if (imc >= 18.5 && imc <= 24.9) {
    linhaCorrepondente("#imc-normal", "#Classificação-normal");
}

if (imc >= 25 && imc <= 29.9) {
    linhaCorrepondente("#imc-excesso-de-peso", "#Classificação-excesso-de-peso");
}

if (imc >= 30 && imc <= 34.9) {
    linhaCorrepondente("#imc-obesidade-classe-1", "#Classificação-obesidade-classe-1");
}

if (imc >= 35 && imc <= 39.9) {
    linhaCorrepondente("#imc-obesidade-classe-2", "#Classificação-obesidade-classe-2");
}

if (imc >= 40) {
    linhaCorrepondente("#imc-obesidade-classe-3", "#Classificação-obesidade-classe-3");
}









