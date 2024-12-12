import { hideLoader, showLoader } from "../components/loader.js";
import { createSectionContainer } from "../components/sectionCreator.js";
import { showPage } from "../main.js";

export const showBuyResponse = () => {
    showLoader();
    const hash = "#buyResponse";
    const page = document.querySelector('#buyResponse');
    
    if(page === null){
        const newPage = createSectionContainer("Estado de la compra",hash);
        const message = document.createElement('h2');
        const button = document.createElement('button');
        button.textContent = 'Confirmar';
        
        button.addEventListener('click', () => {
            window.location.href = "";
        })

        message.textContent = "Su compra fue exitosa.";
        newPage.append(message, button);
        showPage(newPage);
    }else{
        showPage(page);
    }

    hideLoader();
}
