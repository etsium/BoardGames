export const createSelectCustom = (lista, labelContent) =>{
    const containerSelect = document.createElement("div");

    const label = document.createElement("label");
    label.textContent = labelContent;

    const selectGameMaster = document.createElement("select");
    selectGameMaster.name = "RolMasters";
    selectGameMaster.id = "rolMasters-select";
    selectGameMaster.classList.add("form-control", "mb-3")

    lista.forEach( rolMaster => {
        const option = document.createElement("option");
        option.value = rolMaster.id;
        option.textContent = rolMaster.id;

        selectGameMaster.appendChild(option)
    })

    containerSelect.append(label, selectGameMaster);
    return containerSelect;
}
