import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessaje.js";
const signinForm = document.querySelector('#signin-form')

signinForm.addEventListener('submit', async e => {
    e.preventDefault();

    const email = signinForm['signin-email'].value
    const password = signinForm['signin-password'].value


    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)

        
        const signinModal = document.querySelector('#signinModal');
        const modal = bootstrap.Modal.getInstance(signinModal);
        modal.hide()

        showMessage(credentials.user.email + " ha iniciado sesión correctamente ");
    } catch (error) {
        switch (error.code) {
            case 'auth/too-many-requests':
                showMessage('Ha intentado demasiadas veces, espere un rato para volver a intentar', 'error');
                break;

            case 'auth/wrong-password':
                showMessage('Contraseña Incorrecta', 'error');
                break;

            case 'auth/user-not-found':
                showMessage('Usuario no encontrado', 'error');
                break;

            default:
                showMessage('Credenciales incorrectas', 'error');
                break;
        }
    }

})