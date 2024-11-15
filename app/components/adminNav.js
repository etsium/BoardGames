export const createAdminNav = () => {
    if(!document.querySelector('#liNavAdmin')){
        const ulNavbarPages = document.querySelector('#navbarNavPages').querySelector('ul');
    
        const li = document.createElement('li');
        li.classList.add('nav-item', 'admin');
        li.id='liNavAdmin';
    
        const eventCreatorLink = document.createElement('a');
        eventCreatorLink.textContent = 'Crear Nuevo Evento';
        eventCreatorLink.classList.add('nav-link', 'logged-in', 'link-page');
        eventCreatorLink.href = '#create-event';
    
        li.appendChild(eventCreatorLink);
        ulNavbarPages.appendChild(li);
    }   
}