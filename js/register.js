let form = document.querySelector("form");
let email = document.querySelector("#email")
let pass = document.querySelector("#pass")
let pass1 = document.querySelector("#pass1")
let errormail = document.querySelector(".ErrorMail")
let errorPass = document.querySelector(".Errorpass")
let errorPassrep = document.querySelector(".Errorpassrep")
let registrouser = {}

form.addEventListener("submit",function (e) {
    e.preventDefault();
    if(email.value ==""){
        errormail.innerText = "Por favor complete el campo"
    }else if(pass.value =="" || pass.value.length ==''){
        errorPass.innerText = "Por favor complete el campo"
    }else if(pass.value =="" || pass.value.length < 6){
        errorPass.innerText ="Debe ingresar al menos 6 caracteres"
    }else if(pass1.value !== pass.value){
        errorPassrep.innerText = "Las contraseñas no coinciden"
    }else{
        registrouser.email = email.value;
        registrouser.password = pass.value;
        localStorage.setItem('registrouser', JSON.stringify(registrouser))
        this.submit();
    }
})


