const getPost = (image_id) => {
    fetch(`https://api.thecatapi.com/v1/images/:${image_id}`) //endpoint
      .then((response) => response.json()) //callback - promise
      .then((json) => {
        console.log(json);
      }) // retorno
      .catch((error) => console.log(error)); // capturar erro
  };
  
  getPost(1);