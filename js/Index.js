let urlJewelry = 'https://fakestoreapi.com/products/category/jewelery/';

fetch(urlJewelry)
    .then(function(response){
        return response.json()
       
    })
    .then(function(data){
        console.log(data);
        let productosJewelry = document.querySelector(".jewerlyProductos")
        let productos = [];
        for (let i = 0; i < data.length; i++){
            productos += ` <div class="producto">
                <img src="${data[i].image}" alt="img" class="imgB" id="imgproducto">
                <h2>${data[i].title}</h2>
                <p>${data[i].description}</p>
                <p>Precio: ${data[i].price}</p>
                <button type="submit" class="botonvermas">
                    <a href="../Html/producto.html?id=${data[i].id}">Ver más</a> 
                </button> 
            </div>`;
        }
        productosJewelry.innerHTML = productos
})//Aca hay que chequear como hacer el detalles de cada producto 
    .catch(function(error){
        console.log(error);
    })


let categories1 = "women's clothing"
let urlRopaMujer = `https://fakestoreapi.com/products/category/${categories1}`;

fetch(urlRopaMujer)
    .then(function(response){
        return response.json()
       
    })
    .then(function(data){
        console.log(data);
        let ProductosRopaMujer = document.querySelector(".mujerProductos")
        let productos1 = [];
        for (let i = 0; i < data.length; i++){
            productos1 += ` <div class="producto">
                <img src="${data[i].image}" alt="img" class="imgB" id="imgproducto">
                <h2>${data[i].title}</h2>
                <p>${data[i].description}</p>
                <p>Precio: ${data[i].price}</p>
                <button type="submit" class="botonvermas">
                    <a href="../html/producto.html?id=${data[i].id}">Ver más</a>
                </button>
            </div>`;
        }
        ProductosRopaMujer.innerHTML = productos1
})
    .catch(function(error){
        console.log(error);
    })

