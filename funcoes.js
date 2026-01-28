

// Funções

// função sem parâmetro e sem retorno
function dizerOlá() {
    console.log("Olá");
}

dizerOlá()

// funções com parâmetro

function somar (num1, num2){
  let soma = num1 + num2
  console.log(soma)
}

somar(1000, 2000)

// função de callback

/* function subtrair (num1, num2) {
    let num3 = -num2
    console.log(somar(num1, num3))
}

subtrair(2, 10) */

function subtrair (num1, num2) {
    let num3 = funcao(num2)
    console.log(somar(num1, num3))
}

subtrair(4, 10, inverter)


// funcao de seta (arrow function)

const contarAlunos = (array) => {
    return array.length

}

console.log(contarAlunos(["Lívia", "Zenith", "Matheus"]))

// function somar () {
// console.log("Outra função somar")
// }

//arrow function com callback

const funcaoComCallback = () => {
  funcao()
  
}
//funcao de callback anônima
funcaoComCallback(() => {
    console.log("Executando callback")
})
