//Helpers / Utils

function esPar(numerito) {
    
    return (numerito % 2 === 0);
    /*if(numerito % 2 === 0){
    return true;
    } else {
        return false;
    }*/
}
function calcularMediaAritmetica(lista){
   
    sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
     const promedioLista = sumaLista / lista.length
     return promedioLista;
 }
// Calculadora de mediana 
function medianaSalarios(lista){
    const mitad = parseInt (lista.length / 2);
    if (esPar(lista.legth)){
        const personitaMitad1 = lista[mitad -1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

 // Mediana General
const salariosCol = colombia.map(
    function(personita){
        return personita.salary
    }
);
const salarioColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    
    }
);

const medianaGeneralCol = medianaSalarios(salarioColSorted)
 
// Mediana del Top 10%
const spliceStart = (salarioColSorted.length * 90 ) / 100 ;
const spliceCount = salarioColSorted.length - spliceStart;
const salariosColTop10 = salarioColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10)

console.log(
    medianaGeneralCol,
    medianaTop10Col,
);
