// import { heroes } from './data/heroes';
const {heroes,owners} = require("../data/heroes");

// console.log(heroes);
// console.log(owners);


// Hecho con fin solo retorna un objeto, por mas que haya mas que cumplan la misma condicion
const getHeroeById = (id) => {
    return heroes.find( heroe => heroe.id == id)
}

//filter a contrario de find devuelte todos los objetos que cumplen con la condicion
const getHeroesByOwner = (owner) => {
    return heroes.filter( heroe => heroe.owner === owner)
}

// console.log(getHeroeById(3));
// console.log(getHeroesByOwner('Marvel')); 
module.exports = {getHeroeById,getHeroesByOwner}