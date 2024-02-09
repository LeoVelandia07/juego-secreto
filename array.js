let listaGenerica = [];
let lenguajesDeProgramacion = ['JavaScript', 'C','C++', 'Kotlin', 'Phyton'];
let listNumeros = [10,9,8,6,7];

lenguajesDeProgramacion.push('Java','Ruby','Golang');

function mostrarLista (list){
    console.log(list);
}

function mostrarListaInverso (array){
    console.log(array.reverse());
}

function calcularPromedio (){
    let suma = (a,b) => a+b;
    let promedio = listNumeros.reduce(suma)/listNumeros.length;
    console.log(`El promedio de los números de la lista es: ${promedio}`);
}

function mostrarMayor (){
    let mayor = Math.max(...listNumeros);
    console.log(`El número mayor de la lista es: ${mayor}`);
}

function sumarLista() {
    let suma = (a,b) => a+b;
    let totalSuma = listNumeros.reduce(suma);
    console.log(`La suma de los elementos de la lista es: ${totalSuma}`);
}

function mostrarPosicion(lista, elemento) {
    for (let i =0; i<lista.length; i++)
    {
        if (lista [i] === elemento){
            return console.log (`La posicion del número ${elemento} es ${i}`);
        }
    }return -1;
}

mostrarLista(lenguajesDeProgramacion);
mostrarListaInverso(lenguajesDeProgramacion);
calcularPromedio();
mostrarMayor();
sumarLista();
mostrarPosicion(listNumeros,9);