
const persona = {
  nombre: 'Andres',
  apellido: 'Islas',
  edad: 26,
  direccion: {
    ciudad: 'Mexico',
    zip: 55648975,
    lat: 14.3232,
    lng: 34.9233321,
  },
};

//console.table(persona);

const personaTwo = { ...persona };
personaTwo.nombre = 'Peter'

console.log(persona);
console.log(personaTwo);