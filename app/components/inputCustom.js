export const createInputCustom = (name, placeholder, type, idInput) => {
    const containerInput = document.createElement('div');

    const nameInput = document.createElement("label");
    nameInput.textContent = name;
    nameInput.setAttribute('for', idInput);

    const input = document.querySelector("input");
    input.id = idInput;
    input.type = type;
    input.required = true;
    switch (type) {
        case "text":
            input.placeholder = placeholder;
            break;
        case "date":
            const currentDate = new Date();
            const currentDayAvailable = currentDate.getDate() + 5;
            const dayStartAvailable = currentDayAvailable.toString().padStart(2, '0');

            const currentMonth = currentDate.getMonth() + 1;
            const currentyear = currentDate.getFullYear();
            const currentDateAvailable = new Date(currentyear, (currentMonth - 1), currentDayAvailable);
            
            input.valueAsDate = currentDateAvailable;
            input.min = currentyear + "-" + currentMonth + "-" + dayStartAvailable;
            input.max = (currentyear + 1) + "-" + ((currentMonth + 1)%12).toString().padStart(2, '0') + "-" + dayStartAvailable; 
            break;
        case "time":
            input.min = "12:00";
            input.max = "20:00";
            break;
        default:
            input.placeholder = placeholder;
            break;
    }
    

    containerInput.append(nameInput, input);

    return containerInput;
}
