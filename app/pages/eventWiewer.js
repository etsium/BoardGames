import { hideLoader, showLoader } from "../components/loader.js";
import { cretaePanelEventWiever, updatePanelEventWiever } from "../components/panelEventWiever.js";
import { createSectionContainer } from "../components/sectionCreator.js";
import { showPage } from "../main.js";


export const showEventWiever = (oldHash) => {
    showLoader();
    const idMainContainer = "view-event";
    let page = document.querySelector(`#${idMainContainer}`);
    if(page === null){
        const name = getName(oldHash);
        page = createSectionContainer(name,"#"+idMainContainer)
        cretaePanelEventWiever(idMainContainer, oldHash);
        showPage(page);
    }else{
        updatePanelEventWiever(page);
        showPage(page);
    }    

    hideLoader();
}

function getName(oldHash) {
    let result;

    switch (oldHash) {
        case "#rol-games":
            result = "Juego de Rol";
            break;

        case "#table-games":
            result = "Juego de Mesa";
            break;
    
        default:
            result="Desconocido";
            break;
    }

    return result;
}