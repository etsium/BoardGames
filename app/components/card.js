import { setEventCurrent } from "../main.js";

export const card = (event) => {
    const eventCurrent = event;
    const linkCard = document.createElement('a');
    linkCard.href = '#view-event';
    linkCard.style.textDecoration = "none";

    const card = document.createElement('div');
    card.classList.add('postCard');

    const titleDoc = document.createElement('h3');
    titleDoc.textContent = event.data.name;
    titleDoc.classList.add('postTitle');

    const imgUrlDoc = document.createElement('img');
    imgUrlDoc.src = event.data.imageUrl;
    imgUrlDoc.classList.add('postImg');

    const buttonReserve = document.createElement('button');
    buttonReserve.classList.add('postButton');
    buttonReserve.textContent = "Información";

    const priceDoc = document.createElement('p');
    priceDoc.classList.add('postPrice');
    priceDoc.innerHTML = '<b>Precio: $</b>' + event.data.price + ' Args';

    card.appendChild(titleDoc);
    card.appendChild(imgUrlDoc);
    card.appendChild(buttonReserve);
    card.appendChild(priceDoc);
    linkCard.appendChild(card);

    card.addEventListener("click", (e) =>{
        setEventCurrent(eventCurrent);
    })
    return linkCard;
}