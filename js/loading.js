
let soluciones = document.getElementById("soluciones")
let pacman = document.getElementById("pacman")
let problems = document.getElementById("problems")


setTimeout(() => {
    soluciones.style.animation = " letrasPacmanAnimacion 2s linear forwards"
    pacman.style.animation = " pacmanAnimacion 5s linear forwards"
    problems.style.animation = " animationProblems 2.5s linear forwards"
}, 2000);
let Loading = (loadingDelayHidden) => {

    //-----------------------------------------------------
    // Variables
    //-----------------------------------------------------
    // HTML
    let loading = null;
    // Retardo para borrar
    let myLoadingDelayHidden = loadingDelayHidden;
    // Imágenes
    let imgs = [];
    let lenImgs = 0;
    let counterImgsLoading = 0;

    //-----------------------------------------------------
    // Funciones
    //-----------------------------------------------------

    /**
     * Método que aumenta el contador de las imágenes cargadas
     */
    function incrementCounterImgs() {
        counterImgsLoading += 1;
        // Comprueba si todas las imágenes están cargadas
        if (counterImgsLoading === lenImgs) hideLoading();
    }

    /**
     * Ocultar HTML
     */
    function hideLoading() {
        // Comprueba que exista el HTML
        if (loading !== null) {
            // Oculta el HTML de "cargando..." quitando la clase .show
            // Borra el HTML
            setTimeout(function () {
                loading.remove();
                loading.classList.remove('show');
            }, myLoadingDelayHidden);
        }

    }

    /**
     * Método que inicia la lógica
     */
    function init() {
        /* Comprobar que el HTML esté cargadas */
        document.addEventListener('DOMContentLoaded', function () {
            loading = document.querySelector('.loading');
            imgs = Array.from(document.images);
            lenImgs = imgs.length;

            /* Comprobar que todas las imágenes estén cargadas */
            if (imgs.length === 0) {
                // No hay ninguna
                hideLoading();
            } else {
                // Una o más
                imgs.forEach(function (img) {
                    // A cada una le añade un evento que cuando se carge la imagen llame a la funcion incrementCounterImgs
                    img.addEventListener('onload', incrementCounterImgs(), false);
                });
            }
        });
    }

    return {
        'init': init
    }
}

// Para usarlo se declara e inicia. El número es el tiempo transcurrido para borra el HTML una vez cargado todos los elementos, en este caso 1 segundo: 1000 milisegundos,
Loading(7500).init();