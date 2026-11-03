
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexCep = /^\d{5}-\d{3}$/;
const regexTel = /^\(\d{2}\) \d{5}-\d{4}$/;
const regexNum = /^\d+$/;
const regexNome = /^[A-Za-zÀ-ÿ ]+$/;

const email = document.getElementById('email');
const cep = document.getElementById('cep');
const tel = document.getElementById('tel');
const num = document.getElementById('numeros');
const nome = document.getElementById('nome');

email.addEventListener("input", function() {
    validarCampo(email, regexEmail, "mensagemEmail",
        "E-mail válido!", "Digite um e-mail válido.");
});

cep.addEventListener("input", function() {
    validarCampo(cep, regexCep, "mensagemCep",
        "CEP válido!", "Use o formato 00000-000.");
});

tel.addEventListener("input", function() {
    validarCampo(tel, regexTel, "mensagemTel",
        "Celular válido!", "Use o formato (00) 00000-0000.");
});

num.addEventListener("input", function() {
    validarCampo(num, regexNum, "mensagemNum",
        "Número válido!", "Digite apenas números.");
});

nome.addEventListener("input", function() {
    validarCampo(nome, regexNome, "mensagemNome",
        "Nome válido!", "Digite apenas letras e espaços.");
});


function validarCampo(input, regex, idMensagem, textoValido, textoInvalido) {
    const mensagem = document.getElementById(idMensagem);
    const valor = input.value.trim();

    if (regex.test(valor)) {
        input.classList.add("valido");
        input.classList.remove("invalido");

        mensagem.textContent = textoValido;
        mensagem.classList.add("valido");
        mensagem.classList.remove("invalido");
    } else {
        input.classList.add("invalido");
        input.classList.remove("valido");

        mensagem.textContent = textoInvalido;
        mensagem.classList.add("invalido");
        mensagem.classList.remove("valido");
    }
}

document.addEventListener("input", verificarCampos);;
