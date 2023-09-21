//getYear() //devuelve 2 dígitos de la fecha comenzando en 1900.
//Por ello devuelve 120 refiriéndose al año actual (2020).

var fh = new Date()
    fh.getMes = function () {
        const mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        return mes[this.getMonth()];
    } //GetMes es nuestro método que nos devuelve el mes actual.

    fh.getDayOfWeek = function() {
        const dia = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
                    //   0         1         2          3           4         5          6    
        return dia[this.getDay()]
    } //GetDiaDeSemana es nuestro método que devuelve qué día es hoy.

    fh.getMonth2 = function () {
        return Number(this.getMonth() + 1);
    } //GetMonth2 es nuestro método que nos devuelve el nro. de mes correcto

    fh.getDateForCalendar = function () {
        let Y = this.getFullYear();
        let M = this.getMonth() + 1;
        let D = this.getDate();
        if (D < 10) {D = '0' + D}
        if (M < 10) {M = '0' + M}
        return D + '/' + M + '/' + Y;
    } //getDateForCalendar() nuestro método que nos devuelve la fecha en formato DD/MM/YYYY

    fh.getDateForInput = function() {
        let Y = this.getFullYear();
        let M = this.getMonth() + 1;
        let D = this.getDate();
            if (D < 10) {D = '0' + D}
            if (M < 10) {M = '0' + M}
            return Y + '-' + M + '-' + D;
    } //Nuestro método que nos devuelve la fecha para poder escribirla en una BBDD o en un <input type="date">

    fh.getFullDateAudible = function() {
        let day = this.getDate()
        let month = this.getMes()
        let year = this.getFullYear()
            fh.habla("Hoy, es " + day + " de " + month + " de " + year)
    }

    fh.habla = function(texto) {
        console.log(texto)
        var wsa = new SpeechSynthesisUtterance(texto);
            wsa.lang = "es-US"
            wsa.pitch = 1
            speechSynthesis.speak(wsa);
    }