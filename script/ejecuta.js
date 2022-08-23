/*const areaGeneral = document.querySelector('.paymess');

const infoProducts = [];
let borrar, idCounter;

console.log(nombreCactus);

const cleanHTML = (element) => {
    element.innerHTML = '';
}

const addListemers = () => {
    //const buy = document.querySelectorAll('button');
    const precioCactus = document.querySelectorAll('.precio');
    const nombreCactus = document.querySelectorAll('.name-cactus');

    precioCactus.forEach((area, i) => { area.addEventListener('click', (e) => {precioCactus(i)})});

}

//-- Recibe el nombre del cactus
const generarcarta = (nombre) => {
    idCounter++;
    infoProducts.push({id: idCounter, nombre: nombre});
}

const updateBuy = () => { cleanHTML(areaGeneral); }

const insertBuy = () => {
    
    const insertHTML = areaGeneral.map((area) => {
        return `<div>insero</div>`;
    });
}



*/

const areaHTML = document.querySelector('.container-carrito');
let infoProducts = [];
let compras;

console.log(areaHTML);