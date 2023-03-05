const formulario = document.getElementById('formulario')
const requerido = document.querySelectorAll('.requerido');
const span = document.getElementsByTagName('span');


formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    validaNome();
    validaEmail();
    validaTelefone();
    validaMensagem();
})

function error(index) {
    requerido[index].style.border = "2px solid #DF2A2A";
    requerido[index].style.margin = "0px";
    span[index].style.display = "block";
}

function retiraError(index) {
    requerido[index].style.border = "2px solid #3BCC87";
    span[index].style.display = "none";
    requerido[index].style.margin = "";
}


function validaNome() {
    if (requerido[0].value.length < 3){
        error(0);
    } else {
        retiraError(0);
    }
}

function validaEmail() {
    if(requerido[1].value.length < 4) {
        error(1);
    } else {
        retiraError(1);
    }
}

function validaTelefone() {
    if(requerido[2].value.length < 8 ){
        error(2);
    } else {
        retiraError(2);
    }
}

function validaMensagem() {
    if(requerido[3].value == "" ){
        error(3);
    } else {
        retiraError(3);
    }
}