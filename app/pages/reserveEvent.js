import { hideLoader, showLoader } from "../components/loader.js";
import { createPanelEventReserve } from "../components/panelEventReserve.js";
import { createSectionContainer } from "../components/sectionCreator.js";
import { showPage } from "../main.js";

export const showEventReserve = () => {
    showLoader();
    const idMainContainer = "reserve-event";
    let page = document.querySelector(`#${idMainContainer}`);
    if(page === null){
        page = createSectionContainer("Resrvar Evento","#"+idMainContainer)
        createPanelEventReserve(idMainContainer);
        showPage(page);
    }else{
        showPage(page);
    }    

    hideLoader();
}