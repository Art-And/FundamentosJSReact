const arreglo = [1,2,3,4];

let arregloTwo = [...arreglo, 5];

const arregloThree = arregloTwo.map( (numero) => {
  return numero * 2;
});
/* arreglo.push(1); */

console.log(arreglo);
console.log(arregloTwo);
console.log(arregloThree);
