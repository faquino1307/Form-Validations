import { Validator } from "./common/validations.js";
import { Person } from "./models/person.model.js";
var validator = new Validator();
function main() {

    //subscripçiones a eventos 
    var buttonSendInfo = document.querySelector('#sendInfo');
    if (buttonSendInfo) {
        buttonSendInfo.addEventListener('click', sendInfo);
    }

}

function setElementValidationStatus(input, validationResult) {

    let messageElement = input.previousElementSibling;
    if (validationResult.isValid) {
        input.classList.remove('invalid-input');
        messageElement.innerHTML = "";
        messageElement.classList.add("d-none");
    } else {
        input.classList.add('invalid-input');
        messageElement.innerHTML = validationResult.message;
        messageElement.classList.remove("d-none");
    }
}

//obtener los inputs de un form y validarlos
function validateFormBySelector(formSelector) {
    let currentForm = document.querySelector(formSelector);
    let isValidForm = true;
    if (currentForm) {
        let inputs = currentForm.querySelectorAll('input');
        inputs.forEach((input) => {
            let inputType = input.name;
            switch (inputType) {
                case 'nombre':
                case 'apellido':
                    let validationProperNameResult = validator.validateProperName(input.value);
                    setElementValidationStatus(input, validationProperNameResult);
                    isValidForm = isValidForm && validationProperNameResult.isValid;
                    break;
                case 'email':
                    let validationEmailResult = validator.validateEmail(input.value);
                    setElementValidationStatus(input, validationEmailResult);
                    isValidForm = isValidForm && validationEmailResult.isValid;
                    break;
                case 'curp':
                    let validationCURPResult = validator.validateCURP(input.value);
                    setElementValidationStatus(input, validationCURPResult);
                    isValidForm = isValidForm && validationCURPResult.isValid;
                    break;
                case 'rfc':
                    let validationRFCResult = validator.validateRFC(input.value);
                    setElementValidationStatus(input, validationRFCResult);
                    isValidForm = isValidForm && validationRFCResult.isValid;
                    break;
            }
        });
    }

    return isValidForm;
}

function sendInfo() {
    let isValidFrom = validateFormBySelector('.form');
    console.log('isValidFrom: ' + isValidFrom);
    if (isValidFrom) {
        //SendInformation.
        //construir objeto persona y mandarlo al backend.
        //mostrar al usuario algo que represente que se esta procesando la infromación.


        let currentForm = document.querySelector('.form');
        currentForm.classList.add('d-none');
        let processingInfoElement = document.querySelector('.processing-info');
        processingInfoElement.classList.remove('d-none');


        let name = document.querySelector('input[name=nombre]');
        let lastName = document.querySelector('input[name=apellido]');
        let email = document.querySelector('input[name=email]');
        let personId = document.querySelector('input[name=curp]');
        let taxId = document.querySelector('input[name=rfc]');
        let newPerson = new Person(name.value, lastName.value, email.value, personId.value, taxId.value);
        console.log(newPerson);

        //poner valores en atributo valor
        document.querySelector('#infoName').innerHTML = newPerson.name;
        document.querySelector('#infoLastName').innerHTML = newPerson.lastName;
        document.querySelector('#infoEmail').innerHTML = newPerson.email;
        document.querySelector('#infoPersonID').innerHTML = newPerson.personId;
        document.querySelector('#infoTaxID').innerHTML = newPerson.taxID;
        //simulacion que despues de 3 seg se muetra nuevamente el formulario
        setTimeout(function () {
            //limpiar formulario 
            name.value = "";
            lastName.value = "";
            email.value = "";
            personId.value = "";
            taxId.value = "";

            //limpiar valores en etiquetas
            document.querySelector('#infoName').innerHTML = "";
            document.querySelector('#infoLastName').innerHTML = "";
            document.querySelector('#infoEmail').innerHTML = "";
            document.querySelector('#infoPersonID').innerHTML = "";
            document.querySelector('#infoTaxID').innerHTML = "";

            currentForm.classList.remove('d-none');
            processingInfoElement.classList.add('d-none');
        }, 4000);

    } else {
        //show why is invalid
    }
}

document.addEventListener("DOMContentLoaded", main);




