import { Validator } from "./common/validations.js";

var validator = new Validator();
function main(){
    
    //subscripçiones a eventos 
    var buttonSendInfo = document.querySelector('#sendInfo');
    if(buttonSendInfo){
        buttonSendInfo.addEventListener('click',sendInfo);
    } 

}

function setElementValidationClass(element, isValid){
    isValid === true ? element.classList.remove('invalid-input') : element.classList.add('invalid-input');
}

function sendInfo(){
    console.log('click');
    /*
        La funcion send tiene la responsabilidad de enviar la información.
        pero tiene que validar la consistencia de la información.
     */

    //¿que?: Validar formulario
    //¿Como? : implementar un validador
    //validar que exista el botton de enviar información
    /*
    1- obtener los datos / inputs del formulario
    2- validarlos
    3- Evaluar que hacer con el resultado de la validación IsValidForm true | false
    */
    var form = document.querySelector('.form');
    if(form){
        // 1 
        var formInputs = form.querySelectorAll('input');
        console.log(formInputs);
        //Validar los inputs
        //nombre debe tener por lo menos 3 carcteres y no contener caracteres especiales.
        var inputName = form.querySelector('input[name=nombre]');
        if(inputName){
            var valueName = inputName.value;
            var isValidName = validator.validateProperName(valueName);
            setElementValidationClass(inputName, isValidName);
        }

        //Apellido prácticamente lo mismo que el nombre
        var inputApellido = form.querySelector('input[name=apellido]');
        if(inputApellido){
            //setElementValidationClass(inputApellido, validator.validateProperName(inputApellido.value));
            var valueApellido = inputApellido.value;
            var isValidApellido = validator.validateProperName(valueApellido);
            setElementValidationClass(inputApellido, isValidApellido);
        }
    }
    
}

document.addEventListener("DOMContentLoaded",main);


    

