document.querySelector(".formulário-para-calculadora").addEventListener("submit", function (e) {
    e.preventDefault()

    const nome = document.querySelector("#name").value;
    const altura = parseFloat(document.querySelector("#height").value / 100);
    const peso = parseFloat(document.querySelector("#weigth").value);

    const calculadora = (peso / (altura * altura)).toFixed(1);

    localStorage.setItem("nome", nome);
    localStorage.setItem("calculadora", calculadora);

    window.location.href = "./tabela/tabela.html"
})
