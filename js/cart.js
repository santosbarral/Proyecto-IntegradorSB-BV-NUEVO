
let recuperarcarrito = localStorage.getItem('carrito');
let data = JSON.parse(recuperarcarrito);
let ulcarrito = document.querySelector('.ulcarrito')

console.log(data);
if (data !=/*no es nulo */ null) {
    for (let i = 0; i < 5; i++) {
        carrito = data[i]

        console.log(carrito);


    }
    ulcarrito.innerHTML =
    `
    <h3> ${data.title} </h3>
    <img src= "${data.image}" alt=''</img>
    <p> Precio: ${data.price} </p>
    `     
}
//Falta hacerlo iterar//

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
