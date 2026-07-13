const areas = document.querySelectorAll(".area-carrossel");

areas.forEach(area => {

    const carrossel = area.querySelector(".carrossel-livros");
    const esquerda = area.querySelector(".esquerda");
    const direita = area.querySelector(".direita");

    direita.addEventListener("click", () => {
        carrossel.scrollBy({
            left: 260,
            behavior: "smooth"
        });
    });

    esquerda.addEventListener("click", () => {
        carrossel.scrollBy({
            left: -260,
            behavior: "smooth"
        });
    });

});