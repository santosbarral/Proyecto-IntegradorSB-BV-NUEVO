let form = document.querySelector("form");
let email = document.querySelector("#email")
let pass = document.querySelector("#pass")
let errormail = document.querySelector(".ErrorMail")
let errorPass = document.querySelector(".Errorpass")
let user = {}

form.addEventListener("submit",function (e) {
    e.preventDefault();
    if(email.value ==""){
        alert("Por favor complete el campo email");
    }else if(pass.value =="" || pass.value.length == 0){
        alert("Por favor complete el campo contraseña");
    }else if(pass.value =="" || pass.value.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres");
    }else{
        user.email =email.value;
        user.password = pass.value;
        localStorage.setItem('user', JSON.stringify(user))
        this.submit();
        //Averiguar como hacer una redireccion al home//
    }
})

