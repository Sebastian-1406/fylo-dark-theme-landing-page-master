const expresion = {correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,}
let formulario = document.getElementById('formulario');
let inputEmail = document.getElementById('email');



const validarCampo = () => {

    let validarCorreo = expresion.correo.test(inputEmail.value)

    if(validarCorreo){
        document.querySelector(".formulario").classList.remove("formulario-icorrecto");
    }else{
        document.querySelector(".formulario").classList.add("formulario-icorrecto");
    }

}

const enviarFormulario = (e) => {

    e.preventDefault()
    
    let validarCorreo = expresion.correo.test(inputEmail.value);

    if(validarCorreo){
        formulario.reset();
    }
}


inputEmail.addEventListener("blur", validarCampo);
inputEmail.addEventListener("keyup", validarCampo);
formulario.addEventListener("submit", enviarFormulario);