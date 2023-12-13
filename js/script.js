// getAll
const getAllPosts = async (u2) => {
    try {
        const res = await fetch(`https://www.vagalume.com.br/${u2}`);
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return;
        }

        const artistas = data.results;

        artistas.forEach((element) => {
            console.log(
                `ID do artista: ${element.id} \n Nome do artista: ${element.desc}, URL: ${element.url}`
            );
            var container = document.querySelector(".container-cards");
            let card = `
        <div class="card" style="width: 18rem;">
            <img src="${element.pic_small}" class="card-img-top" alt="Foto artista ${element.desc}">
            <div class="card-body">
                <h5 class="card-title">${element.desc}</h5>
                <p class="card-text">URL do artista no site vagalume:${element.url}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `;
            container.innerHTML += card;
        });
    } catch (error) {
        console.log(`Erro - ${error}`);
    }
};

getAllPosts();