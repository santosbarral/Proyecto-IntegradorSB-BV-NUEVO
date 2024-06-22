
let urlElectronics = ` https://fakestoreapi.com/products/category/electronics` ;

fetch(urlElectronics)
    .then(function(response){
        return response.json()
       
    })
    .then(function(data){
        console.log(data);
        let electronicProuctos1 = document.querySelector(".electronicProuctos")
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
        electronicProuctos1.innerHTML = productos1
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