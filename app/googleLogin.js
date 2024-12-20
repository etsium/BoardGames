import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessaje.js";

const googleButton = document.querySelector("#googleLogin");

googleButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const provider = new GoogleAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider)
   
    // Close the login modal
    const modalInstance = bootstrap.Modal.getInstance(googleButton.closest('.modal'));
    modalInstance.hide();

    // show welcome message
    showMessage("Bienvenido " + credentials.user.displayName);
  } catch (error) {
    console.log(error);
  }
});