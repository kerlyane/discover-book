const input = document.getElementById("searchInput");
const resultados = document.getElementById("resultadosBusca");

if (input && resultados) {

    input.addEventListener("input", () => {

        let valor = input.value.toLowerCase();

        resultados.innerHTML = "";

        if (valor === "") {
            resultados.style.display = "none";
            return;
        }

        const livros = document.querySelectorAll(".livro-card");

        livros.forEach(livro => {

            const titulo = livro.querySelector("h3").innerText;
            const imagem = livro.querySelector("img").src;

            if (titulo.toLowerCase().includes(valor)) {

                resultados.innerHTML += `
                    <div class="resultado-item" onclick="irParaElemento('${titulo}')">
                        <img src="${imagem}">
                        <div>
                            <h4>${titulo}</h4>
                        </div>
                    </div>
                `;
            }

        });

        resultados.style.display = "block";

    });

}

function irParaElemento(titulo) {

    const livros = document.querySelectorAll(".livro-card");

    livros.forEach(livro => {

        if (livro.querySelector("h3").innerText === titulo) {

            livro.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    });

}