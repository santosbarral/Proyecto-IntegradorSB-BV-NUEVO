let Qstring = location.search
let data = new URLSearchParams(Qstring);
let ID = data.get("id");
let endpoint = `https://fakestoreapi.com/products/${ID}`
let carrito ={}

fetch(endpoint)
    .then(function (response) {
        return response.json()

    })
    .then(function (data) {
        console.log(data);
        let detalleProducto = document.querySelector(".productodetalles")
        let detalle =
            ` 
            <img src= "${data.image}" alt=''</img>
            <h3> ${data.title} </h3>
            <h4> ${data.description} </h4>
            <h4> Categoría:<a href="./category.html?categories=${data.category}">${data.category}</a></h4>
            <p> Precio: ${data.price} </p>
            <a href="./cart.html"><button class="botoncarrito">Agregar al carrito</button></a>
             `;
        detalleProducto.innerHTML = detalle

        //Para agregar al carrito los articulos//
        let botoncarrito = document.querySelector('.botoncarrito')
        botoncarrito.addEventListener('click',function (e) {
            e.preventDefault();
            carrito = data;
            console.log(carrito);
            localStorage.setItem('carrito', JSON.stringify(carrito))
        })

    })
    .catch(function (error) {
        console.log(error);
    })


    
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