//1
function converter() {
  let nome = document.getElementById("nome").value
    let resultado =  document.getElementById("resultado")
    resultado.innerText = nome.toLowerCase()
}

//2
function contarLetras() {
    let nome1 = document.getElementById("nome1").value
    let resultado1 = document.getElementById("resultado1")
    resultado1.innerText = nome1.length
}


//3
function MostrarUltimaLetra () {
    let  palavra = document.getElementById("palavra").value
    let resultado2 = document.getElementById("resultado2")
    resultado2.innerText = palavra[palavra.length - 1]
}
//4
function MostreAsQuatroPrimeirasLetras () {
    let letras =  document.getElementById("letras").value
    let resultado3 = document.getElementById("resultado3")
    let parte = letras.slice(0,4)
    resultado3.innerText = parte
}

//5
function  TrêsUltimasLetras() {
    let letras1 = document.getElementById("letras1").value
    let resultado4 = document.getElementById("resultado4")
    let parte1 = letras1.slice(-3)
    resultado4.innerText = parte1
}

//6
function MostrarNomeCompleto() {
    let nome3 = document.getElementById("nome3").value
     let nome4 = document.getElementById("nome4").value
    let resultado5 = document.getElementById("resultado5")
    resultado5.innerText = nome3 + "" +nome4
}

//7
function APrimeiraLetraDoSeuNome() {
    let nome5 = document.getElementById("nome5").value
    let resultado6 = document.getElementById("resultado6")
    resultado6.innerText = nome5
}


//8
function formatar() {
    let nomealuno = document.getElementById("nomealuno").value
    let resultado6 = document.getElementById("resultado6")
    resultado6.innerText = "Olá, " + nomealuno.toUpperCase() + " Seja bem-vindo ao sistema"
}
//9
function verificar() {
    let nomever = document.getElementById("nomever").value
    let resultado7 = document.getElementById("resultado7")
    if(nomever.length <= 5) {
        resultado7.innerText = "Curto"
    } else {
        resultado7.innerText = "Nome Longo"
    }
}