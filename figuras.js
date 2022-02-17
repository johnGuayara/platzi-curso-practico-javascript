// Codigo del cuadrado
console.group("Cuadrados");
/*const ladoCuadrado = 5;
console.log("Los lados de cuadrado miden: " + ladoCuadrado +"cm");
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado +"cm");
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es de : " + areaCuadrado +"cm2");*/

function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();
// Codigo del triangulo 
/*console.group("Tiangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo es: " + ladoTriangulo1 + "cm," + ladoTriangulo2 + "cm," + baseTriangulo + "cm");

const alturaTriangulo = 5.5;
console.log("La altura de triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm");

const areaTriagulo = (baseTriangulo * alturaTriangulo) /2;
console.log("El area del traingulo es de: " + areaTriagulo + "cm2");*/
function perimetroTriangulo( lado1,lado2,base){
    return lado1+lado2+base;
}
function areaTriangulo(base,altura){
    return (base*altura)/2;
}

console.groupEnd();

//codigo del circulo 
/*console.group("Circulos");
//RADIO
    const radioCirculo = 4;
    console.log("El radio del circulo es: " + radioCirculo +"cm")
//DIAMETRO
    const diametroCirculo = radioCirculo * 2;
    console.log("El diametro del circulo es: " + diametroCirculo + "cm")*/
//PI
    const piCirculo = Math.PI;
    console.log("El PI es: " + piCirculo)
/*//CIRCUFERENCIA
    const perimetroCirculo =  diametroCirculo * piCirculo;
    console.log("El perimetro del circulo es: " + perimetroCirculo + "cm")
//AREA
    const areaCirculo = (radioCirculo * radioCirculo) * piCirculo;
    console.log("El area del circulo es: " + areaCirculo + "cm2")*/
    function diametroCirculo(radio){
        return radio*2;
    }
    function perimetroCirculo(radio){
        const diametro = diametroCirculo(radio);
        return diametro * piCirculo;
    }
    function areaCirculo(radio){
        return (radio*radio) *piCirculo;
    }
console.groupEnd();
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
} 
function calcularPerimetroTriangulo(){
    const input = document.getElementById("inputTriangulo");
    const value = input.value;
    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const input = document.getElementById("inputTriangulo");
    const value = input.value;
    const area = areaTriangulo(value);
    alert(area);
} 
function calcularDiametroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const diametro = diametroCirculo(value);
    alert(diametro);
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
} 
function alturaTriangulo(ladoA, ladoB, ladoBase) {
    if (ladoA != ladoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        let trianguloPequenoLadoA; // PENDIENTE
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}