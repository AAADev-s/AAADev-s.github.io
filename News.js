let botonR = document.getElementById("reload");
let buscador = document.getElementById("tema")

function buscar(){
    let tema = buscador.value
    const url = `https://newsapi.org/v2/everything?q=${tema}&sortBy=popularity&language=es&apiKey=fd8e2557fa634a4b9137fea330468276`
    fetch(url)
        .then(response => response.json())
        .then((data) =>{ 
            console.log(data)
            const contenedor = document.getElementById("contenedor-noticias");
            contenedor.innerHTML = "";
             if (!data.articles || data.articles.length === 0) {
                contenedor.innerHTML = `<p>No se encontraron noticias sobre "${tema}".</p>`;
                return;}
  
            data.articles.forEach(article => {
                const newsItem = document.createElement("div");
                newsItem.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.description || "Sin descripción disponible"}</p>
                    <a href="${article.url}" target="_blank">Leer más</a>
                    <hr>`;
                contenedor.appendChild(newsItem);
                });
            }) 
        .catch(error => console.error('Error al obtener noticias:', error));
}


    botonR.addEventListener("click",function(){buscar()});