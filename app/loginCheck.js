const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');


export const loginCheck = user => {
    if(user){
        document.querySelector('main').style.display = 'block';
        loggedOutLinks.forEach(link => link.style.display = 'none');
        loggedInLinks.forEach(link => link.style.display = 'block');
    }else{
        loggedOutLinks.forEach(link => link.style.display = 'block');
        loggedInLinks.forEach(link => link.style.display = 'none');
    }
}