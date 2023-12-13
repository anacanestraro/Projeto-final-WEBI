// getAll
const getAllPosts = async (u2) => {
    try {
      const res = await fetch(`https://www.vagalume.com.br/${u2}`);
      const data = await res.json();
  
      if (!res.ok) {
        console.log(data.description);
        return;
      }
  
      data.forEach((element) => {
        console.log(
          `ID do artista: ${element.id} \n Nome do artista: ${element.desc}, URL: ${element.url}`
        );
      });
    } catch (error) {
      console.log(`Erro - ${error}`);
    }
  };
  
  getAllPosts();