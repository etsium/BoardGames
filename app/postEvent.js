import { card } from "./components/card.js";

export const setupPost = (events, sectionPage) => {
    const postsGrid = sectionPage.querySelector(".postsGrid");
    postsGrid.replaceChildren();
    if(events.length) {
        events.forEach(event => {
            postsGrid.appendChild(card(event));
        });
    }else{
        const message = document.createElement("h2");
        message.textContent = "No hay publicaciones de juegos";
        postsGrid.appendChild(message);
        console.log('no posts')
    }
}
