let categories = "men's clothing"
let urlRopaHombre = `https://fakestoreapi.com/products/category/${categories}`;

fetch(urlRopaHombre)
    .then(function(response){
        return response.json()
       
    })
    .then(function(data){
        console.log(data);
        let ProductosRopaHombre = document.querySelector(".hombreProductos")
        let productos = [];
        for (let i = 0; i < data.length; i++){
            productos += `<div class="producto">
                <img src="${data[i].image}" alt="img" class="imgB" id="imgproducto">
                <h2>${data[i].title}</h2>
                <p>${data[i].description}</p>
                <p>Precio: ${data[i].price}</p>
                <button type="submit" class="botonvermas">
                    <a href="../Html/producto.html?id=${data[i].id}">Ver más</a>
                </button>
            </div>`;
        }
        ProductosRopaHombre.innerHTML = productos
})
    .catch(function(error){
        console.log(error);
    })
