// getAll
const getAllPosts = async (artist, album) => {
    try {
        const res = await fetch(`/2.0/?method=album.getinfo&api_key=05bd3517a04dadff15290acb4341232c&artist=${artist}&album=${album}&format=json`);
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return;
        }

        const artistas = data.results;

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
            containercards.innerHTML += card;
        });
    } catch (error) {
        console.log(`Erro - ${error}`);
    }
};

getAllPosts();

// Create post  

//const createPost = async (novoPost) => {
//    try {
//      const res = await fetch(`/2.0/?method=album.getinfo&api_key=05bd3517a04dadff15290acb4341232c&artist=${artist}&album=${album}&format=json`, {
//        method: "POST",
//        headers: {
//          "Content-type": "application/json; charset=UTF-8",
//        },
//        main: novoPostJSON,
//      });
//  
//      const data = await res.json();
//      console.log("inserir");
//      console.log(data);
//  
//      if (!res.ok) {
//        console.log(data.description);
//        return;
//      }
//    } catch (error) {
//      console.log(`Erro - ${error}`);
//    }
//  };
//  
//  let novoPost = {
//    userId: element.id,
//    title: element.desc,
//    main: element.url,
//  };
//  
//  let novoPostJSON = JSON.stringify(novoPost);
//  
//  createPost(novoPostJSON);
//  