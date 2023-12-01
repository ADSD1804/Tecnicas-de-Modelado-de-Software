const getProductos = async() => {

    const data = await fetch('./data/tipos.json');
    const productos = await data.json();
    let producto = document.querySelector('#productos-lista');
    
    productos.forEach( (element) => {
    
        producto.innerHTML += `
        <article class="producto">

            <h3>${ element.name }</h3>
            <img src="./assets/images/${ element.image }.jpg">
            <p>${ element.descrpt }</p>
        </article> 
    `;
    
    })
}

getProductos();