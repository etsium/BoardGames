import { hideLoader, showLoader } from "../components/loader.js";
import { createSectionGridContainer } from "../components/sectionCreator.js";
import { getEventRolGames, setPage, showPage } from "../main.js";
import { setupPost } from "../postEvent.js";
const namedb = "rolGames";

export const showPageRolGames = async () => {
    showLoader();
    const hash = "#rol-games";
    const events = getEventRolGames();
    
    let page = document.querySelector(`${hash}`);
    if(page === null){
        page = createSectionGridContainer("Rol Games",hash);
        showPage(page);
    }else{
        showPage(page);
    }

    await setPage(namedb);
    await setupPost(events, page);
    hideLoader();
}