// getAll
const getAllPosts = async (artist, album) => {
    try {
        const res = await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=05bd3517a04dadff15290acb4341232c&artist=${artist}&album=${album}&format=json`);
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return;
        }

        const artistas = data.results;
        
        console.log(artistas);
        
        artistas.forEach((element) => {
            console.log(
                `Nome artista: ${element.artist} \n Nome do album: ${element.album}`
            );
            var container = document.querySelector(".containercards");
            let card = `
            <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="Foto artista ${element.artist}">
            <div class="card-body">
            <h5 class="card-title">${element.artist}</h5>
                    <p class="card-text">Album:${element.album}</p>
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

// Evento de buscar no botão

document.getElementById('buscarButton').addEventListener('click', function(){
    const album = document.getElementById('albumInput').value;
    const artist = document.getElementById('artistInput').value;

    getAllPosts(artist, album);
});
