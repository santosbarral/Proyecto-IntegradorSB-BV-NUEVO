let Qstring = location.search;
let data = new URLSearchParams(Qstring);
let ID = data.get("id");
let JGaStr;
let Listaid = [];
let ulcarrito = document.querySelector('.ulcarrito');

if(Listaid.length === 0) {
    ulcarrito.innerHTML = '<p class="carritovacio" >El carrito está vacío</p>';
    //Para cuando el carrito esta vacio//
}
if(localStorage.getItem('carrito') !== null) {
    JGaStr = localStorage.getItem('carrito');
    Listaid = JSON.parse(JGaStr);
}
if(ID !== null && /*&& sirve como un y, admeas el ! es de negacion */ !Listaid.includes(ID)) {
    Listaid.push(ID);
}
else
localStorage.setItem('carrito', JSON.stringify(Listaid));
let carrito = "";
    for (let i = 0; i < Listaid.length; i++) {
        fetch(`https://fakestoreapi.com/products/${Listaid[i]}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                carrito += 
                `
                    <div class="product1">
                        <img src="${data.image}" alt="img" class="imgB" id="imgproducto">
                    <div class="divproducto">
                        <div class="divtituloh2">
                            <h2 class="">${data.title}</h2>
                        </div> 
                        <div class="divpreciotboton">
                            <p class="precio">Precio: ${data.price}$</p>
                        </div>
                    </div> 
                `;
                ulcarrito.innerHTML = carrito;

                //Logica para boton comprar//
                let botoncomprar = document.querySelector(".Botoncomprar")
                botoncomprar.addEventListener("click",function (e) {
                    e.preventDefault();
                        alert("¡Gracias por tu compra! redirigiendo a la pagina principal");
                        window.location = "index.html"; //Para redirigr, nos falta chequear como borrar los articulos del carrito//
                        localStorage.removeItem("carrito")//Ya con esto borramos los articulos del carrito//
                })
            
            })
            .catch(function (error) {
                console.log(error);
            })
    }


//Log in (Mismo que el de la clase)//
let recuperouser = localStorage.getItem('user');
let datalogin = JSON.parse(recuperouser);
let usuario = document.querySelector('.Homenavborrariniciado1');
let loginlogout = document.querySelector('.Homenavborrariniciado2')
let logout1 = document.querySelector('.logouttitulo')
if (datalogin != null) {
    objetoUsuario =datalogin;
    //Caputro dom y con for muestro la lista//
    usuario.innerHTML = `<a>Bienvenido! ${objetoUsuario.email}</a>`
    loginlogout.innerHTML = `<a class ='Homenavborrariniciado1' href="logout.html">Logout<a>`
}else {
    
}
//Falta logica Log Out//
