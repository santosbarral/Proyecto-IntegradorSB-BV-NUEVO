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
                <h2 class="section">Category: ${category}</h2>
                <h3>${data[i].title}</h3>
                <img src= "${data[i].image}" alt=''</img>
                <h4>${data[i].description}</h4>
                `
            }
        cat.innerHTML = detalle;
    })
    .catch(function (error) {
        console.log(error);
    })

