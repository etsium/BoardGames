export const createSectionGridContainer= (title, id) => {
    let result;
    const idFormat = id.substring(1);
    if (!document.querySelector(`${idFormat}`)) {
        const main = document.querySelector("main");
        const section = document.createElement("section");
        section.classList.add("sectionPosts", "page");
        section.id = idFormat;

        const h2 = document.createElement("h2");
        h2.textContent = title;

        const div = document.createElement("div");
        div.classList.add("postsGrid");

        section.appendChild(h2);
        section.appendChild(div);
        result = section;
        main.appendChild(section);
    }

    return result;
}
export const createSectionContainer = (title, id) => {
    let result;
    const idFormat = id.substring(1);
    if (!document.querySelector(`${idFormat}`)) {
        const main = document.querySelector("main");
        const section = document.createElement("section");
        section.classList.add("sectionPage", "page");
        section.id = idFormat;

        const h2 = document.createElement("h2");
        h2.textContent = title;

        section.appendChild(h2);
        result = section;
        main.appendChild(section);
    }

    return result;
}