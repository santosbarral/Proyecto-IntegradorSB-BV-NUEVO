let Qstring = location.search;
let data = new URLSearchParams(Qstring);
let ID = data.get("id");
let JGaStr;
let Listaid = [];
let ulcarrito = document.querySelector('.ulcarrito');

if(Listaid.length === 0) {
    ulcarrito.innerHTML = '<p>El carrito está vacío</p>';
    //Para cuando el carrito esta vacio//
}
if(localStorage.getItem('carrito') !== null) {
    JGaStr = localStorage.getItem('carrito');
    Listaid = JSON.parse(JGaStr);
}
if(ID !== null && /*&& sirve como y, admeas el ! es de negacion */ !Listaid.includes(ID)) {
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
                carrito += `
                <li>
                    <h3>${data.title}</h3>
                    <img src="${data.image}" alt="${data.title}" width="100">
                    <p>Precio: $${data.price}</p>
                </li>`;
                ulcarrito.innerHTML = carrito;
            
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
let logouth1 = document.querySelector('.logouttitulo')
if (datalogin != null) {
    objetoUsuario =datalogin;
    //Caputro dom y con for muestro la lista
    usuario.innerHTML = `<a>Bienvenido! ${objetoUsuario.email}</a>`
    loginlogout.innerHTML = `<a class ='Homenavborrariniciado1' href="logout.html">Logout<a>`
}else {
}
