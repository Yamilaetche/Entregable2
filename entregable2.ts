import * as rls from "readline-sync"; 

/*Realice un programa que devuelva la potencia de un número. 
La base y el exponente deben ser ingresados por teclado. 
Sólo deben admitirse exponentes mayores o iguales a cero. 
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos.*/ 

let base : number, exponente: number;

base = rls.questionInt("ingrese un numero base: ");
exponente =  rls.questionInt("ingrese un exponente: ");

   
    function calcular (base: number, exponente: number) {
      if (exponente >= 0)
        
        if (exponente === 0){
           return 1;
        
        }else {
           return calcularPotencia (base, exponente)
        }
     
}  
 
 function calcularPotencia (base: number, exponente: number): number {
     let resultado: number = 1;
     for (let i: number = 0; i < exponente; i++){
         resultado *= base;
     }
     return resultado;
 }
 console.log("La potencia del numero ingresado es: ", calcular(base,exponente));