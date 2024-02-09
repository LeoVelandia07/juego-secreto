function calcularImc (peso, altura){
    imc= peso/(altura*altura);
}
calcularImc(74,1.61);
console.log(`Su imc es ${imc}`);

function calcularFactorial(numero) {
    if (numero === 0) {
        return 1;
    } else if (numero === 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero -1)
    }
}

let numero = Math.floor(Math.random()*10)+1 // Te brinda un numero random del 1 al 10
let resultado = calcularFactorial(numero)

console.log(`El numero random escogido fue : ${numero} y su resultado factorial es :  ${resultado}`)


function dolaresApesos (dolares){
    operacion = dolares * 4000;
    console.log (`sus dolares equivalen a ${operacion} pesos`);
}

dolaresApesos('10');

function mostrarAreaPerimetro (altura,anchura){
    perimetro= (altura+anchura)*2;
    area= anchura*altura;
    console.log(`El perimetro es ${perimetro} ${perimetro ==1 ? 'centimetro' : 'centimetros'} y el area es ${area} ${area  ==1 ? 'centimetro' : 'centimetros'}`);
}
mostrarAreaPerimetro('8','5');


