/* 1 */
function dobro(numero) {
    let  dobro = numero * 2
    console.log("O dobro é ", dobro)
}
let numero = Number(prompt("Digite um numero"))
dobro(numero)
console.log("-------------------------------")

/* 2 */

function CalcularArea(Base, altura) {
   let CalcularArea = Base * altura
    console.log("A area é " ,CalcularArea)
}
let Base = Number(prompt("Informe a base"))
let altura = Number(prompt("Informe a altura"))
 CalcularArea(Base, altura)

 console.log("-------------------------------")
 /* 3 */

 function converterParaFahrenheit ( celsius) {
    let  converterParaFahrenheit = celsius * 1.8 + 32
console.log("A temperatura em fahrenheit é ", converterParaFahrenheit)
}
let  celsius = Number(prompt("Qual a temperatura em celsius",converterParaFahrenheit))
converterParaFahrenheit ( celsius)

 console.log("-------------------------------")

 /* 4 */
 function verificarNota(nota) {
  if (nota >= 7) {
    console.log("Aprovado");
  } else if (nota >= 5) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
}
let nota = Number(prompt("Informe uma nota "))
verificarNota(nota)

console.log("-------------------------------")

/* 5 */

 function verificarNumero(numero1) {
 if ( numero1 > 0) {
    console.log("Positivo")
 } else if ( numero1 < 0) {
    console.log("negativo")
 } else {
    console.log(" zero")
 }
 }
 let numero1 = Number(prompt("Informe um numero "))
 verificarNumero(numero1) 

 console.log("-------------------------------")


 /* 6 */
 function contarPares(numero5) {
  console.log("Números pares de 0 até:", numero5);
   for (let i = 0; i <= numero5; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

let numero5 = Number(prompt("Informe um numero "))
contarPares(numero5)

console.log("-------------------------------")


/* 7 */
function somarIntervalo(inicio, fim) {
    let soma = 0;
    for (let i = inicio; i <= fim; i++) {
        soma += i;
    }

   
    console.log("Soma do intervalo de " + inicio + " até " + fim + ":", soma);
}

let numero8 = Number(prompt("Informe um numero"))
let numero7 = Number(prompt("Informe outro  numero"))
somarIntervalo(inicio , fim)

console.log("---------------------------------------")

/* 8 */

function repetirNome(nome, vezes) {
    for (let i = 0; i < vezes; i++) {
        console.log(nome);
    }
}


let nome = Number(prompt("Informe um nome"))
let numero4 = Number(prompt("Informe um numero"))
repetirNome(nome, vezes);


//9
function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log ("numero x  i = ",resultado)
    }
}
let numero6 = Number(prompt("Informe um numero "))
tabuada(numero);



//10
function contagemPersonalizada(numero) {
    for (let i = numero; i >= 0; i--) {
        if (i % 2 !== 0) {
            console.log("Números ímpares de " + numero + " até 0:", i);
        }
    }
}


contagemPersonalizada(numero);

//11


function mediaAluno(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;

    if (media >= 7) {
        console.log("Resultado da média:", "Aprovado");
    } else if (media > 5 && media < 7) {
        console.log("Resultado da média:", "Recuperação");
    } else {
        console.log("Resultado da média:", "Reprovado");
    }
}




    
    
