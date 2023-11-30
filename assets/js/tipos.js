const getProducts = async() => {

    const data = await fetch('./data/tipos.json');
    const noticias = await data.json();
    let news = document.querySelector('#news');
    
    noticias.forEach( (element) => {
    
        news.innerHTML += `
        <article class="news">
    
            <h3>${ element.title }</h3>
            <img src="./assets/images/${ element.image }.jpg" alt="">
            <p>${ element.description }</p>
            <a href="#">Leer más</a>
    
        </article> 
    `;
    
    })
}

getProducts();