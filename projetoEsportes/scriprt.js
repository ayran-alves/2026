let perguntas = [
    {
        pergunta: "Quem Ganhou a copa do mundo de 2006",
        respostas: ["Italia ", "França", "Brasil", "Holanda"],
        correta: 0,
        imagem: "https://assets.goal.com/images/v3/blt4c3d1e9e838e8b52/brasil_croacia_copa_do_mundo_2006.jpg"
    },
    {
        pergunta: "Quem ganhou o GP ABU DHABI 2022 ?",
        respostas: ["Perez", "Max Verstappen", "L. Hamilton", "Charles Leclerc"],
        correta: 1,
        imagem: "https://www.revcomps.com/wp-content/uploads/2023/03/ABU-DHABI-1.png"
    },
    {
        pergunta: "Quantas Bolas de ouro tem Alfredo Di Stéfano?",
        respostas: [1, 5, 2, 8],
        correta: 2,
        imagem: "https://m.media-amazon.com/images/M/MV5BZGU4ZDM0OTQtMGVhYS00ODlkLWJkNzMtZDVlNmFhZjljNzI2XkEyXkFqcGc@._V1_.jpg"

    },

]


let perguntaAtual = 0
let pontuacao = 0 

function mostrarPergunta() {
    let pergunta = perguntas[perguntaAtual]
    
    document.getElementById("pergunta").innerText = pergunta.pergunta
    document.getElementById("imagem").src=pergunta.imagem
   
    let respostasDiv = document.getElementById("respostas")
    respostasDiv.innerHTML = ""
    pergunta.respostas.forEach(function (resposta, index) {
        respostasDiv.innerHTML += `<button onclick= "verificarRespostas(${index})">${resposta}</button>`

    })
}
function verificarRespostas(index) {
    let pergunta = perguntas[perguntaAtual]

    let resultado = document.getElementById("resultado")
    if (index == pergunta.correta) {
        resultado.innerText = "Acertou 😁"
        pontuacao++
    } else {
        resultado.innerText = "Errou 😭"
    }
}
function proximaPergunta() {
    perguntaAtual++
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
