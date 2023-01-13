/**
 *? EJERCICIO 8: Crear una función que reciba 3 (tres) parámetros: uno de tipo "string" con la operación matemática a realizar,
 *? un segundo y tercer parámetro ambos de tipo number. Dependiendo de ello realizar la operación correspondiente y retornar el resultado de esa operación.
 *? Los valores permitidos a recibir son:
 *? "+"
 *? "-"
 *? "*"
 *? "/"
 *? En caso contrario, retornar un string con la frase "La operación matemática que intenta realizar es inexistente"
 */

 //*function calculoMatematico(operacion, numero1, numero2) {
//let resultado = 0
 //for (numero1 operacion numero2

//return `el resultado de la operacion es: ${resultado}`

// }
// console.log(calculoMatematico(+,1,3))
/*
function calculoMatematico(numero1,operacion,numero2){

switch(operacion) {
    case '+': return numero1 + numero2
    case '-': return numero1 - numero2
    case '/': return numero1 / numero2
    case '*': return numero1 * numero2
    default: return 'La operación matemática que intenta realizar es inexistente'
  }}
  
  const resultado = calculate(15)('+')(28)

  return `el resultado de la operacion es: ${resultado}`;


} 
 console.log(calculoMatematico(15,"+",28))
*/
 function calculoMatematico(operacion, numero1, numero2) {
    if (operacion === "+" ) 
    {resultado = numero1 + numero2
    console.log(numero1, "+" ,numero2, "=" ,resultado)}
    else if (operacion === "-" )
    {resultado = numero1 - numero2
        console.log(numero1, "-" ,numero2, "=" ,resultado)}
    else if (operacion === "*" )
    {resultado = numero1 * numero2
        console.log(numero1, "*" ,numero2, "=" ,resultado)}
    else if (operacion === "/" )
    {resultado = numero1 / numero2
        console.log(numero1, "/" ,numero2, "=" ,resultado)}
    else 
    {console.log ("La operación matemática que intenta realizar es inexistente")};}
    
    calculoMatematico("+", 4, 6)