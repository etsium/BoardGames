import { hideAllPages } from "../main.js";

function loader() {
    const wrapper = document.createElement("div");
    wrapper.id = "loading-wrapper";

    const text = document.createElement("div");
    text.id = "loading-text";
    text.textContent = "Cargando";

    const content = document.createElement("div");
    content.id = "loading-content";


    wrapper.appendChild(text);
    wrapper.appendChild(content);
    return wrapper;
}

export const showLoader = () => {
    hideAllPages();
    document.querySelector("main").appendChild(loader());
}

export const hideLoader = () => {
    document.querySelector("#loading-wrapper").remove();
}