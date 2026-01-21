//Método de Entrada
const nome = prompt("Digite seu nome")

const notificacao = confirm("Deseja receber notificações?")

//Método de Saída
alert(notificacao)

console.log()

//Operações

//Operações aritméticas

let soma = "1" + 2 //output: 3

console.log(soma)

const numero1 = Number(prompt("Digite um número"))
const numero2 = Number(prompt("Digite outro número"))

soma = numero1 + numero2
console.log(soma) 

const email = prompt("Digite seu email")
const senha = Number(prompt("Digite sua senha"))

if (email === 'queiroz.14@hotmail.com' && senha === 12345678){
    alert("Login efetuado com sucesso")
} else {
    alert("email ou senha incorretos")
}

