
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
            productos1 += ` <div class="producto">
                <img src="${data[i].image}" alt="img" class="imgB" id="imgproducto">
                <h2>${data[i].title}</h2>
                <p>${data[i].description}</p>
                <p>Precio: ${data[i].price}</p>
                <button type="submit" class="botonvermas">
                    <a href="../html/producto.html?id=${data[i].id}">Ver más</a>
                </button>
            </div>`;
        }
        electronicProuctos1.innerHTML = productos1
})
    .catch(function(error){
        console.log(error);
    })
