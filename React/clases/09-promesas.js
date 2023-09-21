const {getHeroeById} = require("./clases/07&08-import");

// const promesa = new Promise( (resolve,reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(4);
//         resolve(heroe)
//         // reject()
//     },2000)
// });

// promesa.then( (heroe) => {
//     console.log('then de la promesa');
//     console.log(heroe);
// })
// .catch( err => console.warn("No wacho"))
const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe)
            } else {
                reject("No existe ese heroe loco")
            }
        },2000)
    });
}

getHeroeByIdAsync(3)
.then( console.log )
.catch( console.warn );