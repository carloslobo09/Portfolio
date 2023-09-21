// const capacidad=20;
// alert(`La capacidad del Shopping es: ${capaciddocument
// const texto1="Hola";
// const texto2=" mi nombre es 'Carlos'";
// document.write(`${texto1}${texto2}<br>`);
// let num1 = 2;
// let num2 = 4;
// document.write(num1 != num2);

let roberto = parseFloat(prompt('Ingresa el dinero'));
let pedro = parseFloat(prompt('Ingresa el dinero'));
let cofla = parseFloat(prompt('Ingresa el dinero'));

let helado1 = ['Palito de helado de agua' , 0.6];
let helado2 = ['Palito de helado de crema' , 1];
let helado3 = ['Bombon helado marca heladix' , 1.6];
let helado4 = ['Bombon helado marca heladovich' , 1.7];
let helado5 = ['Bombon helado marca helardo' , 1.8];
let helado6 = ['Potecito de helado con confites' , 2.9];
let helado7 = ['Pote de 1/4 KG' , 2.9];


// document.write(`Nombre: ${helado1[0]} Precio: ${helado1[1]}`)

let resultado = roberto + pedro + cofla;

if (helado1[1] > resultado) {
    document.write(`El dinero ${resultado} no alcanza para comprar un helado`);
} else {
    if (helado1[1] <= resultado && helado2[1] > resultado ) {
        document.write(`El dinero ${resultado} alcanza para comprar un ${helado1[0]}  con un vuelto de ${resultado-helado1[1]}`);
    } else {
        if (helado2[1] <= resultado && helado3[1] > resultado) {
            document.write(`El dinero ${resultado} alcanza para comprar un ${helado2[0]}  con un vuelto de ${resultado-helado2[1]}`);
        } else {
            if (helado3[1] <= resultado && helado4[1] > resultado) {
                document.write(`El dinero ${resultado} alcanza para comprar un ${helado3[0]}  con un vuelto de ${resultado-helado3[1]}`);
            } else {
                if (helado4[1] <= resultado && helado5[1] > resultado) {
                    document.write(`El dinero ${resultado} alcanza para comprar un ${helado4[0]}  con un vuelto de ${resultado-helado4[1]}`);
                } else {
                    if (helado5[1] <= resultado && helado6[1] > resultado) {
                        document.write(`El dinero ${resultado} alcanza para comprar un ${helado5[0]} con un vuelto de ${resultado-helado5[1]}`);
                    } else {
                        if (helado6[1] <= resultado) {
                            document.write(`El dinero ${resultado} alcanza para comprar un ${helado6[0]} o ${helado7[0]}  con un vuelto de ${resultado-helado6[1]}`);
                        }
                    }
                }
            }
        }
    }
}



