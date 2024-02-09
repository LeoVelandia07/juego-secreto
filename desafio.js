function mostrarMensaje(texto) {
    let mensaje = texto
    alert(mensaje)
    return
}

function nombreUsuario (name) {
    let nombre = prompt(name);
    alert (`¡Hola! ${nombre} ¿como estás?`)
    return
}

function numeroDoble (numero){
    let number = parseInt(prompt(numero));
    let operación = number *2 ;
    alert(`Tu numero duplicado sería ${operación}`);
    return
}

function sacarPromedio (numero1,numero2,numero3){
    let number1 = parseInt(prompt(numero1));
    let number2 = parseInt(prompt(numero2));
    let number3 = parseInt(prompt(numero3));
    let promedio = (number1+number2+number3) /3;
    alert(`El promedio de tus 3 números es: ${promedio}`);
    return
}

function numeroMayor (valor1,valor2){
    let value1 = parseInt(prompt(valor1));
    let value2 = parseInt(prompt(valor2));
    if (value1 >value2){
        alert (`${value1} es mayor que ${value2}`);
    }
    else if (value1<value2){
        alert(`${value2} es mayor que ${value1}`);
    }
    else {
        alert('Los números son iguales');
    }
return
}

function multiplicarNumero (dato){
    let info = parseInt(prompt(dato));
    let multiplica = info*info;
    alert(`El resultado de multiplicar tu numero por si mismo es: ${multiplica}`);

}

mostrarMensaje('Jelou mi llave');
nombreUsuario ('¿Cómo te llamas?');
numeroDoble ('Ingresa un numero y te lo duplicamos');
sacarPromedio('Ingresa un numero para sacar promedio','Ingresa un segundo número','Ingresa el último número');
numeroMayor ('Inserta un numero','Inserta otro numero y te diremos cual es mayor');
multiplicarNumero ('Danos un número y lo multiplicamos por si mismo');
