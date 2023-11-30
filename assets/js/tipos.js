const getTipos = async() => {

    const data = await fetch('./data/tipos.json');
    const mushrm = await data.json();
    let news = document.querySelector('#news');
    
    mushrm.forEach( (element) => {
    
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

getTipos();
