let perguntas = [
    {
        pergunta: "Qual o nome da nossa Escola?",
        respostas: ["luis Eualio de Bueno Vidigal Filho", "Nami Jafet", "Senai Osasco", "Senai saõ Caetano"],
        correta: 0
    },
    {
        pergunta: "Qual o nome do diretor da Escola?",
        respostas: ["Santos", "Moraes", "Sanches", "Willian"],
        correta: 3
    },
    {
        pergunta: "Em que ano começou o primeiro técnico em desenvolvimento de sistemas?",
        respostas: [2020, 2021, 2022, 2023],
        correta: 3 //2023

    },

]

//Variáveis de controle
let perguntaAtual = 0
//Qual pergunta ta sendo exibida
// começa na posição 0 // primeira pergunta
let pontuacao = 0 //quantas respostas certas

function mostrarPergunta() {
    let pergunta = perguntas[perguntaAtual]
    //pega a pergunta atual dentro array

    document.getElementById("pergunta").innerText = pergunta.pergunta
    let respostasDiv = document.getElementById("respostas")
    respostasDiv.innerHTML = ""
    //Limpa a div antyes de adicionar novas respostas
    pergunta.respostas.forEach(function (resposta, index) {
        respostasDiv.innerHTML += `<button onclick= "verificarRespostas(${index})">${resposta}</button`

    })
}
function verificarRespostas(index) {
    let pergunta = perguntas[perguntaAtual]

    let resultado = document.getElementById("resultado")
    if (index == pergunta.correta) {
        resultado.innerText = "Acertou"
        pontuacao++
    } else {
        resultado.innerText = "Errou"
    }
}
function proximaPergunta() {
    perguntaAtual++
    //vai para a proxima pergunta
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta()
        document.getElementById("resultado").innerText = ""
    } else {
        mostrarResultadoFinal()
    }
}
function mostrarResultadoFinal() {
    document.getElementById("container").innerHTML = `
        <h2>Quiz finalizado!</h2>
        <p> sua pontuação foi : ${pontuacao}</p>
        <button onclick= "location.reload()">jogar novamente</button>
        ` }
mostrarPergunta()
