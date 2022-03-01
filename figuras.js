
// cuadrado
 function perimetroCuadrado (lado) {
    
    return lado * 4;
}
function areaCuadrado(lado){
return lado * lado;
}
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
   
    const perimetro = perimetroCuadrado(value);
 
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);
}
// Rectangulo

function perimetroRectangulo(lado1,lado2){
    return (lado1 * 2) + (lado2 * 2)
}

function calcularPerimetroRectangulo(){
    const  input = document.getElementById("InputRectangulo1")
    const lado1 = input.value;

    const  input2 = document.getElementById("InputRectangulo2")
    const lado2 = input2.value;

    const perimetro = perimetroRectangulo(lado1,lado2);
    alert(perimetro);
}
function areaRectangulo(lado1,lado2){
    return (lado1 * 1)  * (lado2 * 1)
}
    function calcularAreaRectangulo(){
    const input = document.getElementById("InputRectangulo1");
    const lado1 = input.value;
    const input2 = document.getElementById("InputRectangulo2");
    const lado2 = input2.value;
 

    const area = areaRectangulo(lado1,lado2);
 
    alert(area);
}

// Triangulo
function perimetroTriangulo(lado1,lado2,base,){
    return (lado1 * 1)+ (lado2 * 1) + (base * 1);
}

function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo1");
    const lado1 = input.value;
    const input2 = document.getElementById("InputTriangulo2");
    const lado2 = input2.value;
    const input3 = document.getElementById("InputTrianguloBase");
    const base = input3.value;

    const perimetro = perimetroTriangulo(lado1,lado2,base);
 
    alert(perimetro);
}

function areaTriangulo(base,altura){
    return (base * altura) / 2;
}
function calcularAreaTriangulo(){
    //const input = document.getElementById("InputTrianguloAltura");
    //const altura = input.value;

    const input3 = document.getElementById("InputTrianguloBase");
    const base = input3.value;

    const area = areaTriangulo(base,altura);
 
    alert(area);
}
// Triangulo Isósceles

function calcularPerimetroTrianguloIso(){

    const input = document.getElementById("InputTrianguloIso1");
    const lado1 = input.value;
    const input2 = document.getElementById("InputTrianguloIso2");
    const lado2 = input2.value;
    const input3 = document.getElementById("InputTrianguloIsoBase");
    const base = input3.value;

    
  if (lado1===lado2 ){
        const perimetro = (lado1 * 1 )+ (lado2 * 1) + (base * 1);
        const altura = (Math.sqrt((lado1 **2 ) - (base**2)));
        const area =  (base * altura) / 2;
        alert  ("El Perimetro del triangulo es " + perimetro+ " cm," + " El Area del triangulo es " + area + " cm^2," + " La altura del triangulo es " + altura  + " cm.");
        
    }
    else{
        
        alert("El triangulo debe de tener al menos dos lado de mismo tamaño")
    }
   
}




// circulo
function diametroCirculo(radio){
    return radio * 2;
}
const PI = Math.PI ;
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
 
    alert(perimetro);
}
function areaCirculo(radio){
    return (radio * radio ) * PI
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);

    alert(area);
}
