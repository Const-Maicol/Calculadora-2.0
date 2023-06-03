function numeros(valor){
    document.getElementById('resultado').value += valor;
}

function operacion(){
    var operacion = document.getElementById('resultado').value;
    if( operacion == 0){
        document.getElementById('resultado').value = 'sin operacion'
    } else {
        document.getElementById('resultado').value = eval(operacion);
    }
}

function resetear(){
    document.getElementById('resultado').value = " ";
}