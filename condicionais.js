// let compra = parseFloat(prompt("digite o valor da compra"))
// let frete = 20
// let valorFinal;

// if (compra >= 200) {
//   alert("Frete grátis")
//   frete = 0
// }

// valorFinal = compra + frete

// alert(`o valor final da compra é ${valorFinal} com frete: ${frete}`)


// mais de uma condição -> else if

// exemplo: situação do aluno
// Solicita as três notas ao usuário
//let nota1 = Number(prompt("digite a primeira nota"))
//let nota2 = Number(prompt("digite a segunda nota"))
//let nota3 = Number(prompt("digite a terceira nota"))

// Calcula a média das notas e limita a uma casa decimal
//let media = ((nota1 + nota2 + nota3) / 3).toFixed(1)

// Verifica se o aluno foi aprovado, está em recuperação ou foi reprovado
//if (media >= 7) {
   // alert(`Aluno aprovado ${media}`)
//} else if (media < 7 && media >= 5) {
   // alert(`Aluno em recuperação ${media}`)
//} else {
  //  alert(`Aluno reprovado ${media}`)
//}

// Pergunte ao usuário se ele possui habilitação e é maior de 18 anos

// caso ele seja menor de 18 anos -> ele não pode tirar habilitação

// caso ele tenha 18 anos ou mais e não possui habilitação -> ele pode tentar a prova do detran

// caso ele tenha 18 ou mais e possui habilitação -> ele pode dirigir

let idade = Number(prompt("Qual sua idade?"))
let habilitacao = prompt("Você possui habilitação? (sim/não)").toLowerCase();

if (idade < 18) {
    alert("Você não pode tirar habilitação.")
} else if (idade >= 18 && habilitacao === "não") {
    alert("Você pode tentar a prova do detran.")
} else if (idade >= 18 && habilitacao === "sim") {
    alert("Você pode dirigir.")
} else {
    alert("Resposta inválida.")
}

// Usando outro nome para a variável para evitar conflito
// const maiorDeIdade = prompt("É maior de 18 anos? Responda: sim ou não").toLowerCase()

// let possuiHabilitacao
// if (maiorDeIdade === "não") {
//   alert("Não pode tirar habilitação")
// } else if (maiorDeIdade === "sim") {
//   possuiHabilitacao = prompt("Possui habilitação? Responda: sim ou não").toLowerCase()
// } else {
//   alert("Resposta inválida")
// }

// if (possuiHabilitacao === "não") {
//   alert("ele pode tentar a prova do detran")
// } else if (possuiHabilitacao === "sim") {
//   alert("ele pode dirigir")
// } else if (!!possuiHabilitacao) {
//   alert("Resposta inválida")
// }

