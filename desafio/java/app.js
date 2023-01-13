//let deportes = ["futbol", "basquetbol", "esgrima", "Tenis"];

//console.log (deportes[1]);

//let gatos = ["minuna", "minuno", "minono", "loruno"];

//onsole.log (gatos[0]);
//
//const persona = { nombre: "minuna", 
//    edad: 3,
//    Largo: 71,
//    color: "negro", 
//};

// console.log (persona);
// console.log (persona.nombre);

//const edad = 30;
//const edad2 = edad;

//console.log (edad) ;
//console.log (edad2) ;



//const persona2 = {...persona};
///const persona3 = persona2;

//persona.nombre = 'loruno';

//console.log (persona);
//c/onsole.log (persona2);
///console.log (persona3);

//const nombre = 'minuna';
//const edad = 3;

//console.log (`mi nombre es ${nombre} y tengo ${edad} años`)

function saludar (nombre) {

  console.log (`el nombre tipeado es ${nombre}`);

}

saludar ('Simon');

//function sumar (num1, num2) {

  //  const resultado = num1 + num2;

   // console.log (`El resultado es ${resultado}`)
//}

//sumar (2,5);


//const kilometrosRecorridos = 500;

//if (kilometrosRecorridos > 1000) {console.log(`ha sido un largo viaje de ${kilometrosRecorridos} km`);
    
//} else {console.log(`no fue taaan largo el viaje le pusiste mucho color por viajar ${kilometrosRecorridos} km`);
    
//}

//const num1 = 30;
//const num2 = 20;

//if (num1 > num2) {console.log(`el numero 1 es mayor que el numero 2`);
    
//} else if (num1 === num2) {console.log(`el numero 1 es igual al numero 2`);
    
//} else  {console.log(`el numero 2 es mayor o igual al numero 1`);
    
//}

//const color = 'verde';

//switch (color) {
//    case "rojo": console.log(`el color es rojo`);
        
//        break;
//    case "amarillo": console.log(`el color es amarillo`);
        
 //       break;
 //   case "verde": console.log(`el color es verde`);
        
 //       break;
//    case "azul": console.log(`el color es azul`);
        
 //       break;

 //   default:
 //       break;
//}

//let contador = 0; 

//while (contador < 10 ) {console.log (`el valor del contador es ${contador}`);
//contador +=1 ;
    
//}

// console.log (Math.random());

//let random;

//while (true) { 
 //    random = Math.random() * 100;

   // if (random >= 70 ) {
        
   //     console.log (`el valor del numero es mayor o igual a: ${random}`);
  //      console.log (`algoritmo finalizado`);
  //      break;
  //  } 
  //      console.log (`el numero obtenido fue ${random}`);
    
//}

let sumatoria = 0;
let random ;
let maximo = 300;

do {
    random = Math.random() * 100;

if (sumatoria + random > maximo);
{
    console.log(`algoritmo finalizado!`)
    break;
}
    
    sumatoria = sumatoria + random;
    console.log(`Valor Acomulado: ${sumatoria}`);
} while (sumatoria < maximo);

console.log (`el valor de la sumatoria es ${sumatoria}`);