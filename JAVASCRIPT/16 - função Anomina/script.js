 let bomDia = function(nome) {
    return "Bom dia " + nome
 }
 let nome = prompt("Qual o seu nome ?")
 console.log (bomDia(nome))

 let multiplicar = function (num1, num2, num3, ) {
    return num1 * num2 * num3
 }
 let num1 = Number(prompt("Informe um numero"))
 let num2 = Number(prompt("Informe um numero"))
 let num3 = Number(prompt("Informe um numero"))
 console.log(multiplicar(num1, num2, num3))


 /* peça uma temperatura, se tiver acima de 30 diga "calor", se tiver abaixo de 12 diga "frio" senão diga "ok" */

 let temperatura = function (temp) {
    if(temp > 30) {
        return "Calor"
    } else if ( temp < 12 ) {
        return "Frio"
    } else {
        return "Ok"
    }
 }
 let temp = Number(prompt("Informe a temperatura"))
 console.log(temperatura(temp))

 // peça um salario, se ele for menor ou igual a 2500 de 700 reais de aumento, senão se for menor ou igual  a 3200, de 300 reais de aumento, senão mostre, "Sem aumento"

 let aumento = function ( salario) {
    if (salario <= 2500) {
        return salario + 700
    } else if ( salario <= 3200) {
        return salario +300
    } else {
        return "Sem aumento"
    }
 }
 let salario = Number(prompt("Informe o salario"))
 console.log(salario(sal))