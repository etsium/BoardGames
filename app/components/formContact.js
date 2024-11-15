export const createFormContact = (email) => {
    // Crea el formulario
    const form = document.createElement('form');
    form.setAttribute('id', 'myForm');
    form.setAttribute('action', 'https://formspree.io/f/xwpkbzyy');
    form.setAttribute('method', 'POST');

    // Crea el campo Email
    const emailGroup = document.createElement('div');
    emailGroup.classList.add('form-group');

    const emaiLabel = document.createElement('label');
    emaiLabel.setAttribute('for', 'email');
    emaiLabel.textContent = 'Email:';
    emailGroup.appendChild(emaiLabel);

    const emailInput = document.createElement('input');
    emailInput.value = email;
    emailInput.readOnly = true;
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.required = true;
    emailGroup.appendChild(emailInput);

    form.appendChild(emailGroup);
    // Crea el campo de "Asunto"
    const subjectGroup = document.createElement('div');
    subjectGroup.classList.add('form-group');

    const subjectLabel = document.createElement('label');
    subjectLabel.setAttribute('for', 'subject');
    subjectLabel.textContent = 'Asunto:';
    subjectGroup.appendChild(subjectLabel);

    const subjectInput = document.createElement('input');
    subjectInput.setAttribute('type', 'text');
    subjectInput.setAttribute('id', 'subject');
    subjectInput.setAttribute('name', 'subject');
    subjectInput.setAttribute('placeholder', 'Escribe el asunto aquí');
    subjectInput.required = true;
    subjectGroup.appendChild(subjectInput);

    form.appendChild(subjectGroup);

    // Crea el campo de "Mensaje"
    const messageGroup = document.createElement('div');
    messageGroup.classList.add('form-group');

    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');
    messageLabel.textContent = 'Mensaje:';
    messageGroup.appendChild(messageLabel);

    const messageTextarea = document.createElement('textarea');
    messageTextarea.setAttribute('id', 'message');
    messageTextarea.setAttribute('name', 'message');
    messageTextarea.setAttribute('placeholder', 'Escribe tu mensaje aquí');
    messageTextarea.required = true;
    messageGroup.appendChild(messageTextarea);

    form.appendChild(messageGroup);

    // Crea el botón de envío
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Enviar';
    form.appendChild(submitButton);

    // Añade un evento al formulario para manejar el envío
    form.addEventListener('submit', function (event) {
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        alert(`De: ${email} Asunto: ${subject}\nMensaje: ${message}`);
    });


    return form;
}