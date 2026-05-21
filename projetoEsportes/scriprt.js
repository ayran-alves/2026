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
        respostas: ["1", "5", "2", "8"],
        correta: 2,
        imagem: "https://m.media-amazon.com/images/M/MV5BZGU4ZDM0OTQtMGVhYS00ODlkLWJkNzMtZDVlNmFhZjljNzI2XkEyXkFqcGc@._V1_.jpg"
    },
    {
        pergunta: "Qual país venceu a Copa do Mundo de Futebol em 2018?",
        respostas: ["Brasil", "Alemanha", "França", "Argentina"],
        correta: 2,
        imagem: "https://portalpne.com/wp-content/uploads/2018/06/copa-do-mundo-2018.jpg"
    },
    {
        pergunta: "Em qual esporte Neymar Jr. se destacou profissionalmente?",
        respostas: ["Vôlei", "Basquete", "Futebol", "Tênis"],
        correta: 2,
        imagem: "https://s.rfi.fr/media/display/8bfde6de-10c3-11ea-97f9-005056bf7c53/w:1024/p:16x9/2019-07-05t161338z_1568878747_rc1815237950_rtrmadp_3_soccer-spain-fcb-neymar_0.jpg"
    },
    {
        pergunta: "Quantos jogadores tem um time de basquete em quadra?",
        respostas: ["7", "5", "11", "9"],
        correta: 1,
        imagem: "https://static.todamateria.com.br/upload/hi/st/historia-basquete-og.jpg"
    },
    {
        pergunta: "Qual país conquistou o maior número de medalhas de ouro na história das Olimpíadas?",
        respostas: ["China", "Estados Unidos", "Rússia", "Alemanha"],
        correta: 1,
        imagem: "https://www.olimpiadatododia.com.br/wp-content/uploads/2019/07/medalha-toquio.jpg"
    }
    ,
    {
        pergunta: "Quantos jogadores tem um time de futebol em campo?",
        respostas: ["9", "10", "11", "12"],
        correta: 2,
        imagem: "https://imagens.ebc.com.br/pmx7axFvv8iRqpebTpp0YA6flb4=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2025/07/04/captura_de_tela_2025-07-04_as_19.54.33.jpg?itok=A70vdAiE"
    },
    {
        pergunta: "Em que país começaram os Jogos Olímpicos da era moderna?",
        respostas: ["Grécia", "França", "Estados Unidos", "Itália"],
        correta: 0,
        imagem: "https://i0.wp.com/viajento.com/wp-content/uploads/2018/04/jogos-olimpicos-da-era-moderna.jpg?fit=1200%2C900&ssl=1"
    }
]


let perguntaAtual = 0
let pontuacao = 0 

function startQuiz() {
    document.getElementById("start-screen").classList.add("hidden")
    document.getElementById("quiz-screen").classList.remove("hidden")
    document.getElementById("end-screen").classList.add("hidden")
    perguntaAtual = 0
    pontuacao = 0
    let resultado = document.getElementById("resultado")
    resultado.innerText = ""
    resultado.className = ""
    mostrarPergunta()
}

function mostrarPergunta() {
    let pergunta = perguntas[perguntaAtual]
    
    document.getElementById("pergunta").innerText = pergunta.pergunta
    document.getElementById("imagem").src = pergunta.imagem
   
    let respostasDiv = document.getElementById("respostas")
    respostasDiv.innerHTML = ""
    pergunta.respostas.forEach(function (resposta, index) {
        respostasDiv.innerHTML += `<button class="btn-resposta" onclick="verificarRespostas(${index})">${resposta}</button>`
    })
    let resultado = document.getElementById("resultado")
    resultado.innerText = ""
    resultado.className = ""
}

function verificarRespostas(index) {
    let pergunta = perguntas[perguntaAtual]
    let resultado = document.getElementById("resultado")
    resultado.className = ""

    if (index == pergunta.correta) {
        resultado.innerText = "Acertou ✅"
        resultado.classList.add("resultado-correto")
        pontuacao++
    } else {
        resultado.innerText = "Errou ❌"
        resultado.classList.add("resultado-errado")
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
    // hide quiz and show end screen
    document.getElementById("quiz-screen").classList.add("hidden")
    document.getElementById("end-screen").classList.remove("hidden")
    document.getElementById("final-score").innerText = `Sua pontuação foi: ${pontuacao}`
}
