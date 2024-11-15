import { hideLoader, showLoader } from "../components/loader.js";
import { createSectionGridContainer } from "../components/sectionCreator.js";
import { showPage } from "../main.js";

export const showPageCreateEvent = () =>{
    showLoader();
    const hash = "#create-event";

    let page = document.querySelector('#create-event');
    if(page === null){
        page = createSectionGridContainer("Creador de Eventos",hash);
        const message = document.createElement("h1");
        message.textContent = "Sitio en construcción";
        page.appendChild(message)
    }    

    showPage(page);
    hideLoader();
}