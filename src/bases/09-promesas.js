import { getHeroeById } from './bases/08-FindFilterImport';

/* const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(6);
    resolve(heroe);
    reject('No se puedo concretar la operacion');
  }, 2000);
});

promesa.then((heroe) =>{
  console.log('heroe', heroe);
})
.catch( err => console.warn(err)); */

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      (heroe) ? resolve(heroe):
      reject('Tu personaje no existe');
    }, 2000);
  });
};

getHeroeByIdAsync(2)
  .then(heroe => console.log('Heroe', heroe))
  .catch(err => console.warn(err));