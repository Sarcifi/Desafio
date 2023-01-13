/**
 *? EJERCICIO 9: Crear una función que reciba un número como parámetro y, a partir de ahi, ir agregando ese mismo valor y los siguientes a un arreglo hasta que
 *? el número a ser evaluado sea igual al doble de ese número recibido como parámetro
 *? Validar al inicio de la función que el número sea positivo. De lo contrario retornar la frase "El número ingresado debe ser mayor a 0"
 *? Ayuda: usar ciclo while y recordar el método "push" para ir agregando valores al arreglo
 */

 /*function cargarArreglo(numero) {
    let index = 1,   // carry over logic
      i = numero.length - 1;
    while (index) {
      if (numero[i] === 9) {
        numero[i] = 0;    // setting the digit as 0 and using carry over
        index = 1;
      } else {
        index = 0;
        numero[i] += 1;
        break;    // Breaking loop once no carry over is left
      }
      if (i === 0) {    // handling case of [9,9] [9,9,9] and so on
        numero.unshift(1);
        break;
      }
      i--;    // going left to right because of carry over
    }
  
    return numero;
  }

 console.log(cargarArreglo([0]));

 */



 function cargarArreglo(numero) {
    array = [numero]
    total = numero * 2
    contador = numero+1
     if (numero <= 0) {console.log("el numero debe ser mayor a 0")}
     else {
     while (contador <=total){

     array.push(contador)
     contador=contador + 1
}
     console.log (array)}
}
cargarArreglo(6)