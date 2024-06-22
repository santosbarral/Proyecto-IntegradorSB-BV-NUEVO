let Qstring = location.search
let data = new URLSearchParams(Qstring);
let ID = data.get("id");
let endpoint = `https://fakestoreapi.com/products/${ID}`


fetch(endpoint)
    .then(function (response) {
        return response.json()

    })
    .then(function (data) {
        console.log(data);
        let detalleProducto = document.querySelector(".productodetalles")
        let detalle =
            ` 
            <div class="producto">
                    <img src="${data.image}" alt="img" class="imgB" id="imgproducto">
                <div class="divproducto">
                    <div class="divtituloh2">
                        <h2 class="">${data.title}</h2>
                    </div> 
                    <div class="datapreciocat">
                        <h4 class="datadescription">${data.description}</h4>
                        <div class="datapreciocat1">
                            <h4 class="datadescription" >Categoría: <a class="asincolor" href="./category.html?categories=${data.category}"> ${data.category}</a></h4>
                            <p class="precio"> Precio: ${data.price} </p>
                            <a href="./cart.html"><button class="botoncarrito">Agregar al carrito</button></a>
                        </div> 
                    </div> 
                </div> 
            </div>
            ` 
            ;
        detalleProducto.innerHTML = detalle

        //Para agregar los productos al carrito//
        let botoncarrito = document.querySelector('.botoncarrito');
            botoncarrito.addEventListener('click', function(e) {
            e.preventDefault();

            let idProducto = data.id; 
            let carrito;

            if (localStorage.getItem('carrito') !== null) {
                carrito = JSON.parse(localStorage.getItem('carrito'));
                botoncarrito.innerHTML =
                `Producto Agregado`
            }else {
                carrito = [];
            } 
            if (/*-!-es de negacion*/!carrito.includes(idProducto)) {
                carrito.push(idProducto);
            }
            localStorage.setItem('carrito', JSON.stringify(carrito));
            console.log(carrito);
            })
    })
    .catch(function (error) {
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
    //Caputro dom y con for muestro la lista
    usuario.innerHTML = `<a>Bienvenido! ${objetoUsuario.email}</a>`
    loginlogout.innerHTML = `<a class ='Homenavborrariniciado1' href="logout.html">Logout<a>`
}else {
}