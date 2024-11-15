import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessaje.js"

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

        const signupModal = document.querySelector('#signupModal');
        const modal = bootstrap.Modal.getInstance(signupModal);
        modal.hide()

        showMessage("Bienvenido " + userCredentials.user.email, "success");


    } catch (error) {
        console.log(error.code);
        console.log(error.message);

        switch (error.code) {
            case 'auth/email-already-exists':
                showMessage("El correo electrónico ya esta registrado ", "error");
                break;
            case 'auth/auth/invalid-email':
                showMessage("El email no es valido ", "error");
                break;

            case 'auth/weak-password':
                showMessage("La contraseña debe contener al menos 6 caracteres ", "error");
                break;
        
            default:
                showMessage("Algo Salio Mal ", "error");
                break;
        }
    }
})