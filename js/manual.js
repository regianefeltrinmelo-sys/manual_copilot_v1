document.addEventListener("DOMContentLoaded", () => {

    const menu = document.getElementById("menu-list");
    const sections = document.querySelectorAll("main section");

    sections.forEach((section, index) => {

        if (!section.id) {
            section.id = `secao-${index + 1}`;
        }

        const titulo =
            section.querySelector("h1,h2,h3")?.textContent ||
            `Seção ${index + 1}`;

        const li = document.createElement("li");

        li.innerHTML = `
            <a href="#${section.id}">
                ${titulo}
            </a>
        `;

        menu.appendChild(li);
    });

    const topoBtn = document.getElementById("btn-topo");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topoBtn.style.display = "block";
        } else {
            topoBtn.style.display = "none";
        }

    });

});
