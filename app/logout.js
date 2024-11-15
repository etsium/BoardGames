import { signOut } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessaje.js";

const logout = document.querySelector('#logout');

logout.addEventListener('click', async () => {
    await signOut(auth);
    document.querySelector('main').style.display = 'none';
    deleteAdminElements();
    showMessage('Cerraste sesion correctamente');
})


const deleteAdminElements = () =>{
    const elementsAdmin = document.querySelectorAll('.admin');

    elementsAdmin.forEach(element => {
        element.remove();
    });
} 