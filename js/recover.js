let form = document.querySelector("form");
let email = document.querySelector("#email")
let errormail = document.querySelector(".ErrorMail")
let checkbox = document.querySelector("#checkbox")
let ErrorCheckbox = document.querySelector(".ErrorCheckbox")
let recoverUser = {}

form.addEventListener("submit",function (e) {
    e.preventDefault();
    if(email.value ==""){
        errormail.innerText = "Por favor escriba su email"
    }else if (!checkbox.checked) {
        ErrorCheckbox.innerText = "Por favor acepte el campo Quiero recuperar mi contraseña"
    }else{
        recoverUser.email = email.value;
        localStorage.setItem('recoverUser', JSON.stringify(recoverUser))
        this.submit();
    }
})