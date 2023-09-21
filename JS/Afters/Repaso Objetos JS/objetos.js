//Primera forma de crear objetos en JS
// var persona = new Object()
//     persona.nombre = "Fernando"
//     persona.apellido = "Luna"
//     persona.anioNacimiento = 1975
//     persona.obtenerNombreCompleto = function() {
//         return this.nombre + ' ' + this.apellido
//     }
//     persona.obtenerAnioActual = function() {
//         let d = new Date()
//             return d.getFullYear()
//     }
//     persona.obtenerEdad = function() {
//         let anios = Number(this.obtenerAnioActual() - this.anioNacimiento)
//         return anios
//     }

//Segunda forma de crear objetos en JS
// function persona(nombre, apellido, anioNacimiento) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.anioNacimiento = anioNacimiento
//     this.obtenerNombreCompleto = function() {
//         return this.nombre + ' ' + this.apellido
//     }
//     this.obtenerAnioActual = function() {
//         let d = new Date()
//             return d.getFullYear()
//     }
//     this.obtenerEdad = function() {
//         let anios = Number(this.obtenerAnioActual() - this.anioNacimiento)
//             return anios
//     }
// }

// // let p = new persona("Fernando", "Luna", 1975)
// let p = new persona("Nicolas", "Luna", 1996)

class persona {
    constructor (nombre, apellido, anioNacimiento) {
    this.nombre = nombre
    this.apellido = apellido
    this.anioNacimiento = anioNacimiento
    this.obtenerNombreCompleto = function() {
        return this.nombre + ' ' + this.apellido
    }
    this.obtenerAnioActual = function() {
        let d = new Date()
            return d.getFullYear()
    }
    this.obtenerEdad = function() {
        let anios = Number(this.obtenerAnioActual() - this.anioNacimiento)
            return anios
    }
    }
}

let p = new persona("Fernando", "Luna", 2005)

let otrapersona = new persona("Julian", "Luna Conte", 2005)

let otramas = new persona("Nicolas", "Luna", 1996)