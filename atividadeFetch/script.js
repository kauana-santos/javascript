const inputCep = document.getElementById("cep");

inputCep.addEventListener("mouseleave", verificaCep);

async function verificaCep() {
    const cep = inputCep.value.replace(/\D/g, "");

    if (cep.length !== 8) {
        alert("Digite um CEP com 8 dígitos!");
        return;
    }

    try {
        const response = await fetch(
            `https://viacep.com.br/ws/${cep}/json/`
        );

        const dados = await response.json();

        if (dados.erro) {
            throw new Error("CEP inválido!");
        }

        document.getElementById("rua").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("estado").value = dados.uf;

    } catch (erro) {
        alert(erro.message || "Erro ao consultar o CEP!");
    }
}
