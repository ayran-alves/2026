// JS
function jogar(escolhaUsuario) {
    let opcoes = ["pedra", "papel", "tesoura"]
   //               0         1         2

   let escolhaComputador = opcoes[Math.floor(Math.random()*3)]

   let final = ""
   if(escolhaUsuario == escolhaComputador) {
    final = "Empate"
   } else if (
    (escolhaUsuario == "pedra" && escolhaComputador == "tesoura") ||
    (escolhaUsuario == "papel" && escolhaComputador == "pedra") ||
    (escolhaUsuario == "tesoura" && escolhaComputador == "papel")

   ) {
    final = "Jogador Ganhou"
   } else {
    final = "Computador ganhou"
   }
    let resultado = document.getElementById("resultado")
    resultado.innerText = "jogador:" + escolhaUsuario +"|Computador:" +escolhaComputador + "=" +final
}