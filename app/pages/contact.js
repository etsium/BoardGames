import { auth } from "../firebase.js";
import { createFormContact } from "../components/formContact.js";
import { hideLoader, showLoader } from "../components/loader.js";
import { createSectionContainer } from "../components/sectionCreator.js";
import { showPage } from "../main.js";

export const showPageContact = async () => {
    showLoader();
    const email = auth.currentUser.email;
    const hash = "#contact";
    const page = document.querySelector('#contact');
    
    if(page === null){
        const newPage = createSectionContainer("Contacto",hash);
        newPage.appendChild(createFormContact(email));
        showPage(newPage);
    }else{
        showPage(page);
    }

    hideLoader();
}
