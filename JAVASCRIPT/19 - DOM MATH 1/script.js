function arredondar() {
    let numero = document.getElementById("numero"). value
    let round= document.getElementById("round")
    let ceil = document.getElementById("ceil")
    let floor = document.getElementById("floor")

        round.innerText ="justo:" + Math.round(numero)
        ceil.innerText ="cima:" + Math.ceil(numero)
        floor.innerText ="baixo:" + Math.floor(numero)
        }
function calcular() {
    let valor = document.getElementById("Valor"). value
    let potencia= document.getElementById("potencia").value
    let resultado = document.getElementById("resultado")
     resultado.innerText = Math.pow(valor, potencia)
    // 2,3 = 2³ = 2 * 2 * 2 = 8
}

function raizQuadrada() {
    let raiz = document.getElementById("raiz").value
    let resposta = document.getElementById("resposta")
    resposta.innerText = Math.sqrt(raiz)
}
//Mix e Min - Mario e Menor número
console.log(Math.max(5, 12, 9, 30, 7)) //30
console.log(Math.min(5, 12, 9, 30, 7)) //5
console.log(Math.round(Math.random() * 10))
console.log(Math.floor(Math.random() * 10))
//1 a 10
console.log(Math.floor(Math.random))


