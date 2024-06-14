let recuperarcarrito = localStorage.getItem('carrito');
let data = JSON.parse(recuperarcarrito);
let ulcarrito = document.querySelector('.ulcarrito')

if (data !=/*no es nulo */ null) {
    objetocarrito = data;
    ulcarrito.innerHTML =
    `
    <h3> ${data.title} </h3>
    <img src= "${data.image}" alt=''</img>
    <p> Precio: ${data.price} </p>
    `     
}
//Falta hacerlo iterar//












//carrit//

/*let Qstring = window.location.search
let data = new URLSearchParams(Qstring);
let id = data.get('id');
console.log(id);
let ulcarrito = document.querySelector(".ulcarrito");

let ListaArticulosFavs = {};

if (localStorage.getItem('carrito') != null) {
    JSONstring = localStorage.getItem('carrito');
    ListaArticulosFavs = JSON.parse(JSONstring);
    console.log(ListaArticulosFavs);
}

if (id !== null &&!ListaArticulosFavs.includes(id)) {
    ListaArticulosFavs.push(id);
    console.log(ListaArticulosFavs);
    
}

for (let i = 0; i < ListaArticulosFavs.length; i++) {
    fetch(`https://fakestoreapi.com/products/${ListaArticulosFavs[i]}`)
        .then(function (response) {
            return response.json();
        })
        .then(function(data){
            carrito += `
            <div class="producto">
                <img src="${data[i].image}" alt="img" class="imgB" id="imgproducto">
                <h2>${data[i].title}</h2>
                <p>${data[i].description}</p>
                <p>Precio: ${data[i].price}</p>
                <button type="submit" class="botonvermas">
                    <a href="../Html/producto.html?id=${data[i].id}">Ver más</a>
                </button>
            </div>`
            ulcarrito.innerHTML = carrito;
        })
}

let jsonString =  JSON.stringify(ListaArticulosFavs);
localStorage.setItem("Carrito", jsonString);*/