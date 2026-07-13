document.querySelectorAll(".categoria-livros").forEach(secao => {

    const lista = secao.querySelector(".carrossel-livros");

    const esquerda = secao.querySelector(".esquerda");
    const direita = secao.querySelector(".direita");

    direita.addEventListener("click", () => {
        lista.scrollBy({
            left: 950,
            behavior: "smooth"
        });
    });

    esquerda.addEventListener("click", () => {
        lista.scrollBy({
            left: -950,
            behavior: "smooth"
        });
    });

});