
const worker = ['Andres', 'Aldo', 'Julio', 'Emmanuel'];

const [ w1 ] = worker;
const [ , w2 ] = worker;
const [ , , w3 ] = worker;

console.log( w2, w1, w3 );

//
const returnArray = () => {
  return ['ABC', 123];
};

const [ letras, numeros ] = returnArray();
console.log(letras, numeros);

//Tarea
const state = (value) => {
  return [value, () => { console.log('Prueba Function')}];
};

const [ nombre, setNombre ] = state('Andres');
console.log(nombre);

setNombre();
