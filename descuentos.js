const precioOriginal = 120 ;
const descuento = 18; 

function calcularPrecioConDescuento(precio,descuento){
const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precio * porcentajePrecioConDescuento)/100 ;

return precioConDescuento
}


/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}); */

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inpuDiscount = document.getElementById("InputDiscount");
    const discountValue = inpuDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)
//alert (precioConDescuento)
    const resultP = document.getElementById("ResultP")
    resultP.innerText = "El precio con descuento es: $ " + precioConDescuento;
}

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];