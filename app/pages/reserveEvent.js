import { hideLoader, showLoader } from "../components/loader.js";
import { createPanelEventReserve, updatePanelEventReserve } from "../components/panelEventReserve.js";
import { createSectionContainer } from "../components/sectionCreator.js";
import { showPage } from "../main.js";

export const showEventReserve = () => {
    showLoader();
    const idMainContainer = "reserve-event";
    let page = document.querySelector(`#${idMainContainer}`);
    if(page === null){
        page = createSectionContainer("Reservar Evento","#"+idMainContainer)
        createPanelEventReserve(idMainContainer);
        showPage(page);
    }else{
        updatePanelEventReserve();
        showPage(page);
    }    

    hideLoader();
}