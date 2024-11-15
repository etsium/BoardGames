import { getEventCurrent } from "../main.js";
import { showEventReserve } from "../pages/reserveEvent.js";
import { createLabelCustom } from "./labelCustom.js";
import { createReviewModal, updateReviewModal } from "./reviewModal.js";
import { createStarRating } from "./starRaiting.js";

export const cretaePanelEventWiever = (idMainContainer, oldHash) => {
    const eventCurrent = getEventCurrent();
    const sectionMain = document.querySelector(`#${idMainContainer}`);

    const div = document.createElement('div');
    div.classList.add("containerEventWiever");

    const divLeft = document.createElement("div");
    divLeft.classList.add("containerLeft");
    const divTopLeft = document.createElement("div");
    divTopLeft.classList.add("containerLeftTop");
    const divBotLeft = document.createElement("div");
    divBotLeft.classList.add("containerLeftBot");

    const img = document.createElement("img");
    img.src = eventCurrent.imageUrl;
    img.id = "data-imgUrl";
    img.classList.add("imgEventWieverCurrent");

    const system = createLabelCustom("Sistema: ", eventCurrent.information.system, "data-system");

    const level = createLabelCustom("Nivel: ", eventCurrent.information.level, "data-level");

    const style = createLabelCustom("Estilo: ", eventCurrent.information.style, "data-style")

    const ambientation = createLabelCustom("Ambientación: ", eventCurrent.information.ambientation, "data-ambientation")

    const price = createLabelCustom("Precio: ", "$" + eventCurrent.price, "data-price");

    const duration = createLabelCustom("Duración: ", eventCurrent.duration, "data-duration");

    const maxPlayers = createLabelCustom("Máximo: ", eventCurrent.maxPlayers + " Jugadores", "data-maxPlayers");

    divTopLeft.append(img);
    divBotLeft.append(system, level, style, ambientation, price, duration, maxPlayers);
    divLeft.append(divTopLeft, divBotLeft);



    const divRigth = document.createElement("div");
    divRigth.classList.add("containerRight");

    const name = document.createElement("h4");
    name.textContent = eventCurrent.name
    name.id = "data-name";

    const history = document.createElement("p");
    history.id = "data-history";
    const text = eventCurrent.information.history
    createEffectHoverWord(text, history);

    const stars = createReviewElement(eventCurrent.reviews);
    stars.addEventListener("click", () =>{
        const reviewModal = document.querySelector("#review-modal");
        if(reviewModal instanceof HTMLElement){
            updateReviewModal(reviewModal);
        }else{
            createReviewModal();
        }
    });

    const button = document.createElement("button");
    button.id = "button-requestEvent";
    button.classList.add("buttonRequestEvent");
    button.textContent = "Reservar";
    button.href

    button.addEventListener("click", (e) => {
        location.href = "#reserve-event"
    })

    divRigth.append(name, history, stars, button);

    div.append(divLeft, divRigth);

    sectionMain.appendChild(div);
}

export const updatePanelEventWiever = (sectionMain) => {
    const eventCurrent = getEventCurrent();

    const stars = createReviewElement(eventCurrent.reviews);

    document.querySelector("#data-imgUrl").src = eventCurrent.imageUrl;
    document.querySelector("#data-system").textContent = eventCurrent.information.system;
    document.querySelector("#data-level").textContent = eventCurrent.information.level;
    document.querySelector("#data-style").textContent = eventCurrent.information.style;
    document.querySelector("#data-ambientation").textContent = eventCurrent.information.ambientation;
    document.querySelector("#data-price").textContent = "$" + eventCurrent.price;
    document.querySelector("#data-duration").textContent = eventCurrent.duration;
    document.querySelector("#data-maxPlayers").textContent = eventCurrent.maxPlayers + " Jugadores";
    document.querySelector("#data-name").textContent = eventCurrent.name;
    const history = document.querySelector("#data-history");
    history.replaceChildren()
    createEffectHoverWord(eventCurrent.information.history, history);
    document.querySelector("#data-score").replaceChildren(stars);
}

function createReviewElement(reviews){
    const scores = getListScores(reviews);
    const score = createStarRating(scores);

    return score;
}

function createEffectHoverWord(text, elementParent) {
    const cleanedText = text.replace(/\s+/g, ' ').trim();
    const words = cleanedText.split(' ');

    // Recorre cada palabra y crea un <span> para cada una
    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.classList.add('word');
        span.textContent = word; // Añade la palabra sin agregar espacios aquí
        elementParent.appendChild(span); // Agrega el <span> al párrafo

        // Añade un espacio explícito entre las palabras
        if (index < words.length - 1) {
            elementParent.appendChild(document.createTextNode(' ')); // Añade un espacio entre palabras
        }
    });

}

function getListScores(reviews) {
    const scores = reviews.map(review => review.score);
    return scores;
}