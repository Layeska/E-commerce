const areaHTML = document.querySelector('.container-carrito');
const btnCompra = document.querySelectorAll('.buy');
const btnCheckOut = document.querySelector('#btn-pay');


let infoProducts = [];
let compras;

btnCompra.forEach(addcardbtn => { 
    addcardbtn.addEventListener('click', addtoCardClick);
});

btnCheckOut.addEventListener('click', comprarBtnClicked);

function comprarBtnClicked() {
    //areaHTML.innerHTML = '';
    window.alert('Gracias por preferirnos');
    const shop = document.querySelectorAll('#carrito-items');
    shop.innerHTML = `<div>Gracias por su compra</div>`;
    updateShoppingCardTotal();
}

function addtoCardClick(event) {
    const button = event.target;
    const item = button.closest('.tarjeta');
    
    const itemTitle = item.querySelector('.name-cactus').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    const itemImge = item.querySelector('img').src;

    addItemtoshopingCard(itemTitle, itemPrice, itemImge);
}

function addItemtoshopingCard(itemTitle, itemPrice, itemImge) {
    const elementTitle = areaHTML.querySelectorAll('.name');

    for(let i=0; i<elementTitle.length; i++) {
        if(elementTitle[i].innerText === itemTitle) {
            let elementQuantity = elementTitle[i].parentElement.querySelector('.num');
            elementQuantity.value++;
            return;
        }
    }
    

    const shopingCardRow = document.createElement('div');

    const shopingCardContent = `
    <div id="carrito-items">
        <div id="items">
            <p>Producto: </p>
            <p class="name">${itemTitle}</p>
            <img src=${itemImge} width="120" height="100">
            <p>Descripción: Planta Ordamental</p>
            <p>Precio: </p>
            <p class="precio">NIO ${itemPrice}</p>
            <input class="num" type="number" value="1">
            <p style="margin-top: -20px;">Cantidad: </p>
            
            <button id="botonEliminar">Vaciar carrito</button>
        </div>
      </div>`;
    
      shopingCardRow.innerHTML = shopingCardContent;
      areaHTML.append(shopingCardRow);

    shopingCardRow.querySelector('#botonEliminar').addEventListener('click', removeShoppingCardItem);

    shopingCardRow.querySelector('.num').addEventListener('change', quantityChanger);
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

    shoppingCardTotal.innerHTML = `NIO ${total.toFixed(2)}`;
}

function removeShoppingCardItem(event) {
    const btnCliked = event.target;
    
    btnCliked.closest('#carrito-items').remove();
    updateShoppingCardTotal();
}

function quantityChanger(event) {
    const input = event.target;

    input.value <= 0 ? (input.value = 1) : null;
   // input.value >= 4 ? (input.value = 4) : null;

    if(input.value >=4) { 
        input.value = 4;
        window.alert('No tenemos más productos por el momento');
    } else null;

    updateShoppingCardTotal();
}

