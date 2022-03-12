let content1 = document.querySelector("#button-content-port");
let content2 = document.querySelector("#button-content-skill");
let content3 = document.querySelector("#button-content-exp");
let content4 = document.querySelector("#button-content-cont");

content1.setAttribute("onclick","ocultarContenidoPort()")
content2.setAttribute("onclick","ocultarContenidoSkill()")
content3.setAttribute("onclick","ocultarContenidoExp()")
content4.setAttribute("onclick","ocultarContenidoCont()")



function ocultarContenidoPort() {
    let x = document.getElementById("port-content");
    if (x.style.display === "flex") {
        x.style.display = "none";
        content1.classList.remove("button-active")
    } else {
        x.style.display = "flex";
        x.style.animation = "animationOpen 0.5s ease-in-out";
        content1.classList.add("button-active")
    }
}
function ocultarContenidoSkill() {
    let x = document.getElementById("skill-content");
    if (x.style.display === "flex") {
        x.style.display = "none";
        content2.classList.remove("button-active")
    } else {
        x.style.display = "flex";
        x.style.animation = "animationOpen 0.5s ease-in-out";
        content2.classList.add("button-active")
    }
}
function ocultarContenidoExp() {
    let x = document.getElementById("exp-content");
    if (x.style.display === "flex") {
        x.style.display = "none";
        content3.classList.remove("button-active")
    } else {
        x.style.display = "flex";
        x.style.animation = "animationOpen 0.5s ease-in-out";
        content3.classList.add("button-active")
    }
}
function ocultarContenidoCont() {
    let x = document.getElementById("contact-content");
    if (x.style.display === "flex") {
        x.style.display = "none";
        content4.classList.remove("button-active")
    } else {
        x.style.display = "flex";
        x.style.animation = "animationOpen 0.5s ease-in-out";
        content4.classList.add("button-active")
    }
}
let imgPort = document.getElementsByClassName("img-port");
let arrayImgPort = Array.from(imgPort)
arrayImgPort.forEach(images => {
    images.addEventListener("mouseover",function() {
        images.style.cursor = "pointer";
    })
});

const overlay = document.getElementById('overlay');
document.querySelectorAll('.grid .contenido .port-content .content-order-in-card .card-port .img-port').forEach((elemento)=>{
    const ruta = elemento.getAttribute('src');
        elemento.addEventListener('click', ()=>{
            overlay.classList.add('activo');
            if (ruta == "./image/JothtiDesign.jpg") {document.querySelector('#overlay img').src="./image/React-App.gif"}  
            if (ruta == "./image/FarmaciaMorillo.jpg") {document.querySelector('#overlay img').src="./image/FARMACIA-HOSPITAL-MORILLO.gif"}  
            if (ruta == "./image/CEA.jpg") {document.querySelector('#overlay img').src="./image/CEA.gif"}  
            if (ruta == "./image/COVIDMorillo.jpg") {document.querySelector('#overlay img').src="./image/CDTM.gif"}  
            if (ruta == "./image/SupOkami.jpg") {document.querySelector('#overlay img').src="./image/Sup Okami.gif"}    
        });
    
});
overlay.addEventListener('click',(evento)=>{
    evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
});
let nombre = "CARLOS"
let segnombre = "IGNACIO"
let apellido = "LOBO"
let HTMLCard = ""
let HTMLCard2 = ""
let HTMLCard3 = ""
let HTMLCard4 = `<h5 class="subtitle">"Hello World"<br><p class="letra2">there are no limits to learning<p></h5>`
let HTMLCard5 = `<h3 class="subtitle2">Analista en Sistemas</br>-</br>Desarrollador</h3>`
    setTimeout(() => {
        HTMLCard += `<p class="letra l1">${nombre}</p>`
        $("#title").html(HTMLCard)
        setTimeout(() => {
            HTMLCard = `<p class="l1">${nombre}</p>`
            HTMLCard2 += `<p class="letra l2">&nbsp;${segnombre}</p>`
            $("#title").html(HTMLCard+HTMLCard2)
            setTimeout(() =>{
                HTMLCard = `<p class="l1">${nombre}</p>`
                HTMLCard2 = `<p class="l2">&nbsp;${segnombre}</p>`
                HTMLCard3 += `<p class="letra l3">&nbsp;${apellido}</p>`
                $("#title").html(HTMLCard+HTMLCard2+HTMLCard3)
                setTimeout(() => {
                    $("#subtitle").html(HTMLCard4)
                    setTimeout(() => {
                        $("#subtitle2").html(HTMLCard5)
                        setTimeout(() => {
                            document.getElementById("burbuja").style.display ="block"
                        }, 1000);
                    },1000)
                },1000)
            },700)
        }, 700)  
    }, 1700);
   
    
let refExpCea = document.getElementById("refExpCea");
let refExpFarm = document.getElementById("refExpFarm");

refExpCea.style.cursor = "pointer";
refExpFarm.style.cursor = "pointer";


refExpCea.addEventListener("click",function () {
    let x = document.getElementById("port-content");
    if (x.style.display === "flex") {
        setTimeout(() =>{
            location.href = "#cea";
        },300)
        null
    } else {
        x.style.display = "flex";
        x.style.animation = "animationOpen 0.5s ease-in-out";
        content1.classList.add("button-active");
        setTimeout(() =>{
            location.href = "#cea";
        },300)
    }
})
refExpFarm.addEventListener("click",function () {
    let x = document.getElementById("port-content");
    if (x.style.display === "flex") {
        setTimeout(() =>{
            location.href = "#farm";
        },300)
        null
    } else {
        x.style.display = "flex";
        x.style.animation = "animationOpen 0.5s ease-in-out";
        content1.classList.add("button-active");
        setTimeout(() =>{
            location.href = "#farm";
        },300)
    }
})
let burbujaP = document.getElementById("burbuja-p");
burbujaP.textContent = "¡Más sobre mí!";
document.querySelector("#burbuja").addEventListener("mouseover",function () {
    burbujaP.textContent = "";
    
})
burbuja.addEventListener("mouseout",function () {
    burbujaP.textContent = "¡Más sobre mí!";
})
