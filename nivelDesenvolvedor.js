function verificarNivel() {
    const resposta = document.getElementById("resposta")
    const nivelSelecionado = document.querySelector("input[name='nível']:checked")

    if (!nivelSelecionado) {
        resposta.innerHTML = "<span style='color: red;'>Nível é obrigatório.</span>"
        return
    }

    const nivel = nivelSelecionado.value

    switch (nivel) {
        case "trainee":
            resposta.innerHTML = "Você é um trainee."
            break;
        case "jr":
            resposta.innerHTML = "Você é um desenvolvedor júnior."
            break;
        case "pl":
                resposta.innerHTML = "Você é um desenvolvedor pleno."
                break;
            case "sr":
                resposta.innerHTML = "Você é um desenvolvedor sênior."
                break;
            default:
                break;
        }
    console.log(resposta)
    console.log(nivelSelecionado)
}