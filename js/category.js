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

