var miCadena = 'Objetos Importantes en JS';
var miCadena2 = "Mi cadena con 'comillas dobles'";
console.log('Hola mundo!');
console.log(miCadena);
console.log(document); //DOM Document Object Model
console.log(window);

function main(){
    console.log("All html are Loaded: The document is fully loaded and parsed!");

    var nombre = document.querySelector('input[name=nombre]');
    var nombreByID = document.getElementById('nombre');

    console.log(nombre);
    console.log(nombreByID);

    //subscripçiones a eventos
    var buttonSendInfo = document.querySelector('#sendInfo');
    if(buttonSendInfo) //validar que exista el botton de enviar información
        buttonSendInfo.addEventListener('click',sendInfo);

    //Continuar
    
    
}

function sendInfo(){
    console.log('click');
    //Validar la información de todo el formulario
    var form = document.querySelector('.form');
    if(form){
        var formInputs = form.querySelectorAll('input');
        console.log(formInputs);
        //Validar los inputs
    }
    
}

document.addEventListener("DOMContentLoaded",main);


    

