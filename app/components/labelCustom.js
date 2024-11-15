export const createLabelCustom = (atribute, data, dataIdLabel) =>{

    const containerDiv= document.createElement("div");
    containerDiv.classList.add("containerLabelCustom")

    const atributeLabel= document.createElement("label");
    atributeLabel.classList.add("labelCustomAtribute");
    atributeLabel.textContent = atribute

    const dataLabel= document.createElement("label")
    dataLabel.classList.add("labelCustomData");
    dataLabel.textContent = data;
    dataLabel.id = dataIdLabel;

    containerDiv.append(atributeLabel, dataLabel);

    return containerDiv;
}
