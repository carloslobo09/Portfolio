const persona = {
    nombre:"carlos",
    apellido:"lobo"
}
// console.log(persona.nombre);
// console.log(persona.apellido);

const useContext = ({nombre,apellido,ques = 'Tec.'}) => {
    return {
        nombreClave : nombre,
        lastName : apellido,
        latlng :{
            lat:14.2321,
            lng:12.323
        }
    }
}

const {nombreClave,lastName,latlng:{lat,lng}} = useContext(persona);
console.log(nombreClave,lastName);
console.log(lat,lng);