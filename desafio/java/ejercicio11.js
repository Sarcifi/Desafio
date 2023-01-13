/**
 *? EJERCICIO 11: Crear una función que reciba un arreglo de números y realice la sumatoria de los mismos.
 *? La función debe retornar la sumatoria de esos números.
 *?
 */

 function sumatoria(numeros = []) {
    
        let count = 0
        for (let i=0;i<numeros.length ;i++ ) {
      
                count = count + numeros[i]
            
         }
          return `la sumatoria es de: ${count}`;
    
 }

 console.log(sumatoria(numeros = [45,88,45,27,50,5,7,25]));