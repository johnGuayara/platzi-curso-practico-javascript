//const precioOriginal = 120;
//const descuento = 18;
function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100-descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}
/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
})*/
function onClickDescuento(){
    const inputPrecio = document.getElementById("inputPrecio");
    const precioValue = inputPrecio.value;
    const inputDescuento = document.getElementById("inputDescuento");
    const descuentoValue = inputDescuento.value;
    const precioConDescuento = calcularPrecioConDescuento(precioValue, descuentoValue);
    const resultado = document.getElementById("resultado");
    resultado.innerText = "El precio con descuento son: $" + precioConDescuento;
}
