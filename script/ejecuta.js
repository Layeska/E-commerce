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
const btnCompra = document.querySelectorAll('.buy');
let infoProducts = [];
let compras;

console.log(btnCompra);

btnCompra.forEach(addcardbtn => { 
    addcardbtn.addEventListener('click', addtoCardClick);
});

function addtoCardClick(event) {
    const button = event.target;
    const item = button.closest('.tarjeta');
    
    const itemTitle = item.querySelector('.name-cactus').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    const itemImge = item.querySelector('img').src;

    

    addItemtoshopingCard(itemTitle, itemPrice, itemImge);
}

function addItemtoshopingCard(itemTitle, itemPrice, itemImge) {
    console.log(itemTitle, itemPrice, itemImge);

    const shopingCardRow = document.createElement('div');
   /* const shoppingCardItemsContainer = document.querySelector('.mostrarcarrito');
    console.log(shoppingCardItemsContainer);*/

    const shopingCardContent = `
    <div id="carrito-items">
        <div id="items">
            <p>Producto: ${itemTitle}</p>
            <img src=${itemImge} width="120" height="100">
            <p>Descripción: Planta Ordamental</p>
            <p>Precio: </p>
            <p class="precio">NIO ${itemPrice}</p>
            <input class="num" type="number" value="1">
            <p style="margin-top: -20px;">Cantidad: </p>
            
            <button id="boton-vaciar">Vaciar carrito</button>
        </div>
      </div>`;
    
      shopingCardRow.innerHTML = shopingCardContent;
      areaHTML.append(shopingCardRow);

      updateShoppingCardTotal();
}

function updateShoppingCardTotal() {
    let total = 0;

    const shoppingCardTotal = document.querySelector('.precio-total');
    const shoppingCardItems = document.querySelectorAll('#carrito-items');
    
    shoppingCardItems.forEach(shoppingCardItem => {
        const shopingCardItemsPriceElement = shoppingCardItem.querySelector('.precio');
        const shopingCardItemPrice = Number(shopingCardItemsPriceElement.textContent.replace('NIO',''));

        const shoppingCartItemQuantityElement = shoppingCardItem.querySelector('.num');
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);

        total = total + shopingCardItemPrice * shoppingCartItemQuantity;
    });

    shoppingCardTotal.innerHTML = `NIO ${total}`;
}