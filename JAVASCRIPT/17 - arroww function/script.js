// funçõa com retorno
function somar1 (n1, n2) {
    return n1+n2
}
//Função anonima
let somar2 = function(n3,n4) {
    return n3 + n4
}

console.log(somar2(1,2))

//arrow function - função da seta
let somar3 = (n5,n6) => {
    return n5 + n6

}

console.log(somar3(1,2))
console.log("-------------------------")

//Peça um numero e verique se é positivo , negativo ou zero
let classificar = (numero) => {
    if (numero < 0 ) {
        return "Negativo"
    } else if ( numero > 0 ) {
        return "Positivo"
    } else {
        return "Zero"
    }

}
let numero = Number(prompt("Informe um numero "))
console.log(classificar(numero))



// impar ou par

let imparOupar =  (num) => {
    let aux = num % 2
    if (aux == 0 ) {
        return "Par"
    } else {
        return "Impar"
    }
}

let num = Number(prompt("Informe o numero"))
console.log(imparOupar(num))

let dobro1 = (n) => {
    return n* 2
}
let dobro2 = n => n * 2
console.log(dobro1(5))
console.log(dobro2(5))
console.log("----------------")

/* peça um numero para o usuario, se for menor ou igual a 10, retorne (numero + 3 * 6 -1 ) senão retorne (numero / 2 +3 * 19) */
let calculo = (numero2) => {
    if (numero2 <=10) {
        return numero2 + 3 * 6 - 1
    } else {
        return numero2 / 2 + 3  - 19
    }
}
let numero2 = Number(prompt("Qual o numero ?"))
console.log(calculo(numero2))