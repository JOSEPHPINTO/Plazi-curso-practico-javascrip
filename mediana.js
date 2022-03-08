

function calcularMediana(lista){

    let nuevaLista = lista.sort((a,b) => a - b);
    console.log(nuevaLista)
    const mitadLista = parseInt(nuevaLista.length / 2);
    let mediana;

    if (esPar(nuevaLista.length)) {
        const elemento1 = nuevaLista[mitadLista]
        const elemento2 = nuevaLista[mitadLista - 1]
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1,
            elemento2,])   
        mediana = promedioElemento1y2 
    } else {
        mediana = nuevaLista[mitadLista]
    }

}

//arr.sort([compareFunction])

function calcularMediaAritmetica(list){
   
   sumaLista = list.reduce(
       function (valorAcumulado = 0, nuevoElemento){
           return valorAcumulado + nuevoElemento;
       }
   );
    const promedioLista = sumaLista / list.length
    return promedioLista;
}
function esPar  (numerito){
    if (numerito % 2 === 0 ){
        return true; 
    } else {
        return false;
    }
      
}

