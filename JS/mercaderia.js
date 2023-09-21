let lista = document.getElementById('lista');
let tabla = "";

function mercaderia(nombre, tipo, stock, precio) {
    this.nombreC = nombre;
    this.Tipo = tipo;
    this.stockM = stock;
    this.PrecioM = precio;
    // Funcion que muestra la tabla
    this.mostrar = function (){
        tabla += "<tr><td>"+this.nombreC+"</td><td>"+this.Tipo+"</td><td>"+this.stockM+"</td><td>"+this.PrecioM+"</td></tr>";
        lista.innerHTML = tabla;
     }
}
// function CrearProd() {
//     var nombre = prompt("Introduce el nombre del producto");
//     var tipo = prompt("Introduce el tipo de producto - Ej: Lacteo, Carne, Verdura, etc");
//     var stock = Number(prompt("Introducie la cantidad en stock"));
//     var precio = Number(prompt("Introduce el del producto precio"));

//     var Prod = new mercaderia(nombre,tipo, stock, precio);
//     Prod.mostrar();
// }
// El descuento se como funcionara, solo no termine por tiempo, aunque se que esta parte seria mas simple, deje un pequeño ejemplo de lo que actualizaria
function descuento(){
    precio=4000;;
    desc=precio*0.21;
    nuevoprecio=precio-desc;
    alert(precio+"nuevo"+nuevoprecio)
}
