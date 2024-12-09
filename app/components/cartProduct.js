import { calculateDifferenceHours, getEventLocalStorageByIdProduct, updateCart } from "../main.js";
import { showMessage } from "../showMessaje.js";
import { createLabelCustom } from "./labelCustom.js";

export const createCartProduct = (productId) => {
    const main = document.createElement("div");
    main.classList.add("cartContainer-product");
    const event = getEventLocalStorageByIdProduct(productId);
    main.id = productId;
    const deleteButton = createButtonDelete();
    deleteButton.addEventListener('click', () => {
        main.remove();
        removeProductFromLocalStorage(main.id);
        updateCart();
        showMessage("EL evento fue eliminado del carrito.");
    })
    const differenceHours = calculateDifferenceHours(event.horainicio,event.horafin);
    const idEvent = createLabelCustom("ID: ", event.idevento);
    const dateEvent = createLabelCustom("Fecha: ", event.fechareserva);
    const nameRolMaster = createLabelCustom("Rol Master: ", event.nombrerolmaster);
    const priceEvent = createLabelCustom("Precio: ", event.precio * differenceHours + (" (" + differenceHours + "h)"));


    main.append(deleteButton, idEvent, dateEvent, nameRolMaster, priceEvent);
    return main;
}

function createButtonDelete() {
    const button = document.createElement('button');
    button.className = 'cartButton';
    button.type = 'button';

    // Crear el SVG
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('width', '16');
    svg.setAttribute('height', '16');
    svg.setAttribute('fill', 'currentColor');
    svg.classList.add('bi', 'bi-trash3-fill');
    svg.setAttribute('viewBox', '0 0 16 16');

    // Crear el path dentro del SVG
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute(
        'd',
        'M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5'
    );

    // Añadir el path al SVG
    svg.appendChild(path);

    // Añadir el SVG al botón
    button.appendChild(svg);

    return button;
}

function removeProductFromLocalStorage(idToRemove) {
    const Key = "Cart";
    // Obtener el Array desde localStorage
    const jsonString = localStorage.getItem(Key);

    if (!jsonString) {
        console.log("El Array no existe en localStorage.");
        return;
    }

    // Convertir de JSON a Array
    let array = JSON.parse(jsonString);

    // Filtrar el Array para eliminar el objeto con el ID específico
    array = array.filter(item => item.id !== idToRemove);

    // Guardar el Array modificado en localStorage
    localStorage.setItem(Key, JSON.stringify(array));

}
