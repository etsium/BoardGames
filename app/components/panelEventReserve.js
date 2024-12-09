import { getEventCurrent, updateCart } from "../main.js";
import { showMessage } from "../showMessaje.js";
import { createInputCustom } from "./inputCustom.js";
import { createLabelCustom } from "./labelCustom.js";
import { createSelectCustom } from "./selectCustom.js";

export const createPanelEventReserve = (idMainContainer) => {
    const sectionMain = document.querySelector(`#${idMainContainer}`);
    const formReserve = createFormReserve();

    sectionMain.appendChild(formReserve);
}

export const updatePanelEventReserve = () => {
    const eventCurrent = getEventCurrent();
    const ev = eventCurrent.data;

    document.querySelector("#label-nameEvent-reserve").textContent = ev.name;
    document.querySelector("#img-imgUrlEvent-reserve").src = ev.imageUrl;
    document.querySelector("#label-priceEvent-reserve").textContent = ev.price;
    document.querySelector("#rolMasters-select").parentElement.replaceWith(createSelectCustom(ev.availableRolMasters, "Rol Master"));
}

const createFormReserve = () => {
    const eventCurrent = getEventCurrent();
    
    const form = document.createElement('form');
    form.classList.add("formEventReserve");
    form.id = 'form-reserve';

    const containRight = document.createElement('div');
    containRight.classList.add("containerEventReserveRight");

    const containLeft = document.createElement('div');
    containLeft.classList.add("containerEventReserveLeft");

    /*-------------------------------------------Contenido de contenedor izquierdo-------------------------------------------*/
    const labelNameEvent = createLabelCustom("Evento: ", eventCurrent.data.name, "label-nameEvent-reserve");

    const imgEvent = document.createElement("img");
    imgEvent.src = eventCurrent.data.imageUrl;
    imgEvent.id = "img-imgUrlEvent-reserve";

    const labelpriceEvent = createLabelCustom("Precio: ", eventCurrent.data.price + "$/h", "label-priceEvent-reserve");
    /*-----------------------------------------------------------------------------------------------------------------------*/
    /*-------------------------------------------Contenido de contenedor derecho-------------------------------------------*/
   
    const inputName = createInputCustom("Nombre Completo", "Nombre Apellido", "text", "nameInputReserve");

    const inputDate = createInputCustom("Fecha de Sesion de Rol", "new Date()", "date", "dateInputReserve");

    const inputTimeStart = createInputCustom("Hora de incio", "", "time", "hourStartInputReserve");

    const inputTimeEnd = createInputCustom("Hora de finalización", "", "time", "hourEndInputReserve");

    const selectGameMaster = createSelectCustom(eventCurrent.data.availableRolMasters, "Rol Master");

    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.textContent = "Añadir al Carrito";

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const event = getEventCurrent();

        let name = document.querySelector('#nameInputReserve').value;
        let date = document.querySelector('#dateInputReserve').value;
        let start = document.querySelector('#hourStartInputReserve').value;
        let end = document.querySelector('#hourEndInputReserve').value;
        let rolMaster = document.querySelector('#rolMasters-select').value;
        let sessionCart = {
            'id': generateUUID(),
            'idevento': event.id,
            'nombrecliente': name,
            'fechareserva': date,
            'nombrerolmaster': rolMaster,
            'horainicio': start,
            'horafin': end,
            'precio': event.data.price
        };

        addToCartList(sessionCart);
    })
    /* ----------------------------------------------------------------------------------------------------------------- */
    containRight.append(inputName, inputDate, inputTimeStart, inputTimeEnd, selectGameMaster, submit);
    containLeft.append(labelNameEvent, imgEvent, labelpriceEvent);
    form.append(containLeft, containRight);

    return form;
}

function addToCartList(session) {
    try {
        let currentCart = JSON.parse(localStorage.getItem('Cart'));

        if (!Array.isArray(currentCart)) {
            currentCart = [];
        }

        currentCart.push(session);

        localStorage.setItem('Cart', JSON.stringify(currentCart));
        updateCart();

        showMessage("Sesion añadida al carrito");
    } catch (error) {
        showMessage("Ocurrio algo inesperado, intentelo de nuevo mas tarde", "error");
    }


}

function generateUUID() {
    return crypto.randomUUID();
}