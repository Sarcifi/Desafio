/**
 *? EJERCICIO 10: Crear una función que reciba un arreglo de números como parámetro y calcule cuántos de esos números son divisibles por 5.
 *? La función debe retornar la cantidad de números divisibles por 5.
 *?  Ayuda: Usar el operador módulo (o resto) "%"
 */

 /*function divisiblesPorCinco(numeros = []) {
    array = [numeros]
    for (let index = numero1; index <= numero2; index++) {
        if (index %5===0){
            contador++;
        }
        
    }
    return `La cantidad de números divisibles por 5 fue de: ${contador}`
 }
 console.log(divisiblesPorCinco([45,33,50,5]))


function divisiblesPorCinco(numeros = []){

    for (let i = 0; i < i; i++) {
         
        let count = 0;
         
        for (let j = 0; j < j; j++)
        {
            if (numeros[i] == numeros[j])
                count++;
        }
        if (count % 5 != 0)
            return numeros[i];
    }
    return -1;
}
 
// driver code
 
        //let arr = [ 2, 3, 5, 4, 5, 2,
       //             4, 3, 5, 2, 4, 4, 2 ];
       // let n = arr.length;
 
        // Function calling
        //document.write(getOddOccurrence(arr, n));
        //console.log(divisiblesPorCinco([45,33,50,5]));

*/
    function divisiblesPorCinco(numeros = []){
        let count = 0
        for (let i=0;i<=numeros.length ;i++ ) {
            if(numeros[i]%5 == 0 ){
                count++;
            }
         }
          return `La cantidad de números divisibles por 5 es: ${count}`
        }
        console.log(divisiblesPorCinco(numeros =[45,88,45,27,50,5,7,25]));

        