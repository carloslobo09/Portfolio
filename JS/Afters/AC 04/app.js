//funciones de retorno

function analizarNro() {
   var nro = prompt('Ingrese un nro:')
      if (Number(nro) >= 10) {
         msj = nro + ' es número mayor o igual a 10.'
      } else if (Number(nro) < 10) {
         msj = nro + ' es número menor a 10.'
      } else {
         msj = "Parece que no ingresó un número. Por favor, vuelva a intentarlo"
         analizarNro()
      }
      return msj
}

function analizo() {
   document.getElementById('mensaje').innerHTML = analizarNro()
}

//FUNCIÓN REUTILIZABLE

var listado = [10, 20, 34, 70, 23, 96, 77, 54]

var preps = ["bajo", "desde", "contra", "ante", "hacia", "según"]

function ordenar(l) {
   if (l.length > 0) {
      return l.sort()
   }
}

function preguntar() {
   var n1 = Number(prompt('Ingrese un nro:'))
   var n2 = Number(prompt('Ingrese otro nro:'))
      alert(n1 + n2)
}

