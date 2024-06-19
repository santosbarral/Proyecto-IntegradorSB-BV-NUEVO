let Qstring = location.search
let data = new URLSearchParams(Qstring);
console.log(data);
let category = data.get("categories");
console.log(category);

fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let cat = document.querySelector(".categoria");
        let detalle = [];
        for (let i = 0; i < data.length; i++) {
            detalle +=
                `
                <h2 class="section">${category}</h2>
                <section>
                <h3>${data[i].title}</h3>
                <img src= "${data[i].image}" alt=''</img>
                <h4>${data[i].description}</h4>
                </section>
                
                `
            }
        cat.innerHTML = detalle;
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