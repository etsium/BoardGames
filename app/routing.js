import { hideAllPages } from "./main.js";
import { showPageContact } from "./pages/contact.js";
import { showPageCreateEvent } from "./pages/createEvent.js";
import { showEventWiever } from "./pages/eventWiewer.js";
import { showEventReserve } from "./pages/reserveEvent.js";
import { showPageRolGames } from "./pages/rolGames.js";
import { showPageTableGames } from "./pages/tableGames.js";

const hashMap = {
    "#rol-games": showPageRolGames,
    "#table-games": showPageTableGames,
    "#create-event": showPageCreateEvent,
    '#view-event': showEventWiever,
    '#reserve-event': showEventReserve,
    '#contact': showPageContact,
};

window.addEventListener('hashchange', (e) => {
    const currentHash = window.location.hash;
    const oldHash = new URL(e.oldURL).hash;
    hideAllPages();
   
    const action = hashMap[currentHash];

    if(typeof action === 'function'){
        action(oldHash);
    }
});
