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
    "uno",
    "dos",
    "tres",
];

// forma 1 de solucionar el reto 

function onClickButtonPriceDiscountCoupon1(){
    const inputPrice = document.getElementById("InputPrice1");
    const priceValue = inputPrice.value;

    const inpuCoupon = document.getElementById("InputCoupon1");
    const couponValue = inpuCoupon.value;
    
    
    let descuento;
        switch(couponValue){ 
            case coupons[0]:
                descuento = 15;
            break;

            case coupons[1]:
                descuento = 30 ;
             break;
            
            case coupons[2]:
                descuento = 50;
            break;
        }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento)

    const resultCoupon = document.getElementById("ResultCoupon1")
    resultCoupon.innerText = "El precio con descuento del cupon es: $ " + precioConDescuento;
}

// Forma 2 de solucionar el reto 

function onClickButtonPriceDiscountCoupon2(){
    const inputPrice = document.getElementById("InputPrice2");
    const priceValue = inputPrice.value;

    const inpuCoupon = document.getElementById("InputCoupon2");
    const couponValue = inpuCoupon.value;
   
   let descuento;
if (!coupons.includes(couponValue)){
        descuento = 0;
        alert("El cupon" + couponValue + " no es válido. "
        ) 
    } else if (couponValue === "uno"){
        descuento = 15;
    }else if (couponValue === "dos"){
        descuento = 25;
    }else if (couponValue === "tres"){
        descuento = 50;
    }
    
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento)

    const resultCoupon2 = document.getElementById("ResultCoupon2")
    resultCoupon2.innerText = "El precio con descuento del cupon es: $ " + precioConDescuento;
}

// forma 3 de solucionar el reto

function onClickButtonPriceDiscountCoupon3(){
    const coupons = [
        {
            name: "uno",
            discount: 15,
        },
        {
            name: "dos",
            discount: 25,
        },
        {
            name: "tres",
            discount: 50,
        },
    ];
    const inputPrice = document.getElementById("InputPrice3");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon3")
    const couponValue = inputCoupon.value;

    const isCouponValueValid = function (coupon){
        return coupon.name === couponValue;
    } 
    
    const userCoupon = coupons.find(isCouponValueValid);
    if (!userCoupon){
        alert("El cupon  " + couponValue + "  no es valido");
        
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        const resultCoupon = document.getElementById("ResultCoupon3");
        resultCoupon.innerText = "El precio con descuento es: $ " + precioConDescuento;
    }

}