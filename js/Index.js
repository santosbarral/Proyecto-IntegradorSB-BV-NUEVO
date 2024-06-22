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
            productos += 
            ` 
                <div class="producto">
                        <img src="${data[i].image}" alt="img" class="imgB" id="imgproducto">
                    <div class="divproducto">
                        <div class="divtituloh2">
                            <h2 class="">${data[i].title}</h2>
                        </div> 
                        <h4 class="datadescription">${data[i].description}</h4>
                        <div class="divpreciotboton">
                            <p class="precio">Precio: ${data[i].price}$</p>
                            <button type="button" class="botonvermas">
                                <a href="../Html/producto.html?id=${data[i].id}">Ver más</a>
                            </button>
                        </div>
                    </div> 
                </div>
            `;
        }
        productosJewelry.innerHTML = productos
})
    .catch(function(error){
        console.log(error);
    })

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
            productos += 
            ` 
                <div class="producto">
                        <img src="${data[i].image}" alt="img" class="imgB" id="imgproducto">
                    <div class="divproducto">
                        <div class="divtituloh2">
                            <h2 class="">${data[i].title}</h2>
                        </div> 
                        <h4 class="datadescription">${data[i].description}</h4>
                        <div class="divpreciotboton">
                            <p class="precio">Precio: ${data[i].price}$</p>
                            <button type="button" class="botonvermas">
                                <a href="../Html/producto.html?id=${data[i].id}">Ver más</a>
                            </button>
                        </div>
                    </div> 
                </div>
            `;
        }
        ProductosRopaHombre.innerHTML = productos
})
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
            productos1 += 
            ` 
                <div class="producto">
                        <img src="${data[i].image}" alt="img" class="imgB" id="imgproducto">
                    <div class="divproducto">
                        <div class="divtituloh2">
                            <h2 class="">${data[i].title}</h2>
                        </div> 
                        <h4 class="datadescription">${data[i].description}</h4>
                        <div class="divpreciotboton">
                            <p class="precio">Precio: ${data[i].price}$</p>
                            <button type="button" class="botonvermas">
                                <a href="../Html/producto.html?id=${data[i].id}">Ver más</a>
                            </button>
                        </div>
                    </div> 
                </div>
            `;
        }
        ProductosRopaMujer.innerHTML = productos1
})
    .catch(function(error){
        console.log(error);
    })


//Log in (Mismo que el de la clase)//
let recuperouser = localStorage.getItem('user');
let datalogin = JSON.parse(recuperouser);
let usuario = document.querySelector('.Homenavborrariniciado1');
let loginlogout = document.querySelector('.Homenavborrariniciado2')
let logouth1 = document.querySelector('.logouttitulo')
if (datalogin != null) {
    objetoUsuario =datalogin;
    //Caputro dom y con for muestro la lista//
    usuario.innerHTML = `<a>Bienvenido! ${objetoUsuario.email}</a>`
    loginlogout.innerHTML = `<a class ='Homenavborrariniciado1' href="logout.html">Logout<a>`
}else {
}