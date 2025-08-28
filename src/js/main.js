var miCadena = 'Objetos Importantes en JS';
var miCadena2 = "Mi cadena con 'comillas dobles'";
console.log('Hola mundo!');
console.log(miCadena);
console.log(document); //DOM Document Object Model
console.log(window);

function main(){

    //subscripçiones a eventos 
    var buttonSendInfo = document.querySelector('#sendInfo');
    if(buttonSendInfo){
        buttonSendInfo.addEventListener('click',sendInfo);
    } 

    //Continuar
    
    
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
        var isValidName = true;
        if(inputName){
            var valueName = inputName.value;
            if(valueName.length < 3)
                isValidName = false;

            var containsSpecialChars = /[^a-zA-Z\s]/.test(valueName);
            if(containsSpecialChars)
                isValidName = false;

            if(!isValidName){
                 inputName.classList.add('invalid-input');
            }else{
                inputName.classList.remove('invalid-input');
            }
        }

        
    }
    
}

document.addEventListener("DOMContentLoaded",main);


    

