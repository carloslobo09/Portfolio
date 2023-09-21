document.getElementById('inicio').style.display = "none";
document.getElementById('contenedor-princial').style.display = "none";
document.getElementById('terminal-inicio').style.display = "block";
let spans = document.getElementsByTagName("span")
let count = spans.length - 1;
for (let index = 0; index < spans.length; index++) {
    cambiarColor(index);
    // console.log(spans[index]);
}

document.addEventListener("DOMContentLoaded",() => {
    setTimeout(() => {
        document.getElementById('txt-fin-terminal').innerHTML = `<p>Verifying DMI Pool Data...</p><p>-</p>`;
    }, 1500);
   

    ocultarTerminalMostrarWindows();
    mostrarPrincipal();
})

function cambiarColor(item) {
    setTimeout(() => {
        spans[item].classList.add("efecto-escritura");
    }, item*1000);
}

function ocultarTerminalMostrarWindows() {
    setTimeout(() => {
        document.getElementById('terminal-inicio').style.display = "none";
        document.getElementById('inicio').style.display = "flex";        
    }, 3300);
}

function mostrarPrincipal() {
    let inicio = document.getElementById("contenedor-princial");
    setTimeout(() => {
        inicio.style.display = "block";
        document.getElementById('inicio').style.display = "none";
    }, 9500);
}