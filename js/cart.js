
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
