let numeroSecreto = 0;
let intentos =0;
let listaNumerosSorteados=[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

console.log(numeroSecreto);
function VerificarIntento () {
    let numeroUsuario =parseInt (document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos ===1) ? 'intento' : 'intentos'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }else {
        
        if(numeroUsuario> numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');  
        } else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    return
}

function generarNumero() {
    let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado)
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumero();
        }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
    
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p', `Indica un numero de 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumero();
    intentos=1;
}

function reiniciarJuego() {
    //Limpiar la caja primero
    limpiarCaja();
    //Indicar mensaje del inicio
    //Generar el número aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el botón al principio de nuevo
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

