//realizar un programa que muestre por consola o alert los numeros del 1 al 100 sustituyalos segun los siguiemtes puntos:
// los multiplos de 3 por la palabra fizz
// los multiplos de 5 por la palabra buzz
// los multiplos 3 y 5 por la palabra fizzbuzz
function fizzbuzz (numero){
    if(numero>1){
        if(numero<100){
        
            if (numero%5 === 0){
            alert('buzz')
          }
          if(numero%3 === 0){
            alert ('fizz')
          }
          if(numero % 5 === 0 && numero % 3 === 0){
            alert ('fizzbuzz');
          }
          }
        } 
      }   
    
 let numero = parseInt(prompt("ingrese un un numero del 1 al 100"));
 fizzbuzz(numero);

