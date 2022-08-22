
//-- Declarando las variables de uso --
const arrayImagenes = ["/img/fondo1.webp","/img/fondo2.webp","/img/fondoCactus.webp"];
let obtenerImg = document.querySelector(".imagen");
let btn_next = document.querySelector(".menos");
let btn_atras = document.querySelector(".mas");

//-- Función donde se miran las img --
function verImagen(index) {
    localStorage.setItem("index", index);
    
    let url = arrayImagenes[index];
    let html = `<img src="${url}"/>`;

    let indexActual = localStorage.getItem("index");
    indexActual = Number(indexActual);

    if(indexActual === 0) {
        btn_atras.style.display = "none";
    } else {
        btn_atras.style.display = "block";
    }
    
    if(indexActual == arrayImagenes.length - 1) {
        btn_next.style.display = "none"; 
    } else {
        btn_next.style.display = "block";
    }
    
    obtenerImg.innerHTML = html;
}

//-- Acción del botón anterior --
btn_atras.addEventListener('click', () => {
    let index = localStorage.getItem("index");

    index = Number(index);
    verImagen(index-1);
});

//-- Acción del botón de siguiente --
btn_next.addEventListener('click', () => {
    let index = localStorage.getItem("index");

    index = Number(index);
    verImagen(index+1);
});

verImagen(0);