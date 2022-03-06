var Loading = () => {

    //-----------------------------------------------------
    // Variables
    //-----------------------------------------------------
    // HTML
    let loading = null;
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
        if(loading !== null) {
            // Oculta el HTML de "cargando..." quitando la clase .show
            loading.classList.remove('show');

            // Borra el HTML
            setTimeout(() => {
                loading.remove();
            }, 3000);
        }

    }

    /**
     * Método que inicia la lógica
     */
    function init() {
        /* Comprobar que el HTML esté cargadas */
        document.addEventListener('DOMContentLoaded', function () {
            loading = document.querySelector('.loading');
            hideLoading();
        });
    }
    return {
        'init': init
    }     

}

// Para usarlo se declara e inicia. El número es el tiempo transcurrido para borra el HTML una vez cargado todos los elementos, en este caso 1 segundo: 1000 milisegundos,
Loading().init();