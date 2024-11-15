import { hideLoader, showLoader } from "../components/loader.js";
import { createSectionGridContainer } from "../components/sectionCreator.js";
import { getEventTableGames, setPage, showPage } from "../main.js";
import { setupPost } from "../postEvent.js";
const namedb = "tableGames";
export const showPageTableGames = async () => {
    showLoader();
    const hash = "#table-games";
    const events = getEventTableGames();
    const page = document.querySelector('#table-games');
    if(page === null){
        console.log("creando....")
        const newPage = createSectionGridContainer("Table Games",hash);
        showPage(newPage);
        await setupPost(events, newPage);
    }else{
        showPage(page);
        await setupPost(events, page);
    }

    await setPage(namedb);
    hideLoader();
}
