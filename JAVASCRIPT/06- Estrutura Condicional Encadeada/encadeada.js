/* 1 - Classificação de Nota */

let nota = Number(prompt("Qual é a nota ?"))
if(nota >= 9) {
    console.log("Exelente")
}else if(nota >= 7 ) {
console.log("Bom")
}else if (nota >= 5) {
    console.log("Regular")
}if(nota <5) {
    console.log("Insuficiente")
}

/*2 - Sistema de Aprovação Escolar */
let nota1 = Number(prompt("Qual foi a nota ?"))
let falta = Number(prompt("Qual foi a quantidade de faltas ?"))
if(nota1 >=7 && falta <= 10 ) {
    console.log("Aprovado")
}else if(nota >= 5 && falta <= 10){
    console.log("recuperação")
}else{
  console.log("Reprovado")
  }
  

  console.log("----------------------------")

 /*3 - Verificação de Idade */
let idade = Number(prompt("Qual sua idade ?"))
 if( idade <= 12 ) {
   console.log("criança")
 }else if( idade <=18) {
   console.log("Adolecente")
 }else if ( idade <= 59) {
   console.log("adulto")
 }else if ( idade >=60) {
   console.log("Idoso")
 }

   console.log("----------------------------")

   /* 4 - Classificação de Temperatura */

   let temp = Number(prompt("Qual é a temperatura"))
   if ( temp >= 35 ) {
    console.log("Muito quente")
   } else if (temp >= 25 ) {
    console.log("Quente")
   }else if ( temp >= 15){
console.log("Agradavel")
   }else if(tem <15 ){
    console.log("Frio")
   }


console.log("----------------------------")

/* 5 - Sistema de Descontos */

let valor = Number(prompt(" Qual o valor da compra ?"))
if(valor >= 500){
    console.log("20% de desconto")
}else if(valor >= 300) {
    console.log("15% de desconto")
}else if(valor >= 100){
    console.log("10% de desconto")
}else if ( valor < 100 ) {
    console.log("Sem desconto")
}

console.log("----------------------------")

/*6 - Classificação de Velocidade */
let vel = Number(prompt("Qual é a velociadade"))
if(vel <= 60) {
    console.log("Dentro do limite")
}else if (vel <= 80){
    console.log("Atenção")
}else if (vel <= 100) {
    console.log("Multa leve")
}else if (vel > 100) {
    console.log("multa grave")
}


console.log("----------------------------")


/*7 - Turno de Estudo */

let turno = (prompt("Informe um turno"))
if(turno == "M") {
    console.log("Matutino")
}else if (turno == "V") {
    console.log("Vaspertino")
}else if (turno == "N") {
 console.log("Noturno")
}else{
    console.log("Turno invalido")
}

/* 8 - Avaliação de IMC (Simplificado) */

let ponto = Number(prompt("Qual é o seu IMC ?"))
if(ponto <18.5) {
    console.log("Abaixo do peso")
}else if(ponto < 25 ) {
    console.log("Peso Normal")
}else if (ponto < 30) {
    console.log("Sobrepeso")
}

/* 9 - Classificação de Pontuação em Jogo  */
let Pontuação = Number(prompt("Qual foi a pontuação ?"))
if(Pontuação >= 1000) {
    console.log("Nivle mestre")
}else if (Pontuação >= 700 ) {
    console.log("Nivel Avançado")
}else if (Pontuação >= 400){
    console.log("Nivel intermediario")
}else{
    console.log("iniciante")
}

/* 10 - Verificação de Horário */

let hora = Number(prompt("Digite a hora (0 a 23):"));
if (hora >= 0 && hora <= 23) {
    if (hora >= 6 && hora <= 11) console.log("Bom dia");
    else if (hora >= 12 && hora <= 17) console.log("Boa tarde");
    else if (hora >= 18 && hora <= 23) console.log("Boa noite");
    else console.log("Boa madrugada");
} else {
    console.log("Hora inválida!");
}

/* 11 - Categoria de Produto */
let codigo = Number(prompt("Qual o codigo do produto"))
if(codigo == "1") {
    console.log("Alimento")
}else if( codigo == "2") {
    console.log("Eletronico")
}else if(codigo == "3") {
    console.log("roupas")
}else if (codigo == "4") {
    console.log("livros")
}




   
   
    


 
