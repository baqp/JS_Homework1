'use strict';
const result = document.getElementById('result');
const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    introduceYourself();
})

function introduceYourself (){
    const inputs = document.querySelectorAll('input');
    result.innerHTML = "";
    for (let i = 0; i<inputs.length-1; i++){
        inputs[i].placeholder = "";
        if(inputs[i].value === "" || inputs[i].placeholder === "Podaj dane"){
            inputs[i].placeholder = "Podaj dane";
        } else {
            switch (i){
                case 0:
                result.innerHTML = `${result.innerHTML}Twoje imię to: <b> ${inputs[i].value}</b><br>`;
                inputs[i].value ="";
                break;
                case 1: 
                result.innerHTML = `${result.innerHTML}Twoje nazwisko to: <b> ${inputs[i].value}</b><br>`;
                inputs[i].value ="";
                break;
            }
        }
    }
}
