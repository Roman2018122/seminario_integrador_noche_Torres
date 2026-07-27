"use strict";
// Concepto puro
function calcularCostoTotal(costoServicio, costoRepuesto) {
    return costoServicio + costoRepuesto;
}
function saludarCliente(nombre) {
    return `Bienvenido al Taller Mecánico, ${nombre}`;
}
// TypeScript verifica el argumento Y el retorno
console.log(calcularCostoTotal(45, 30)); // 75
console.log(saludarCliente("Juan")); // Bienvenido al Taller Mecánico, Juan
// Error de compilación — a propósito (descoméntalo para verlo):
// calcularCostoTotal("45", 30); // Argument of type 'string' is not assignable to 'number'
/* Ejemplo aplicado — calculadora de descuento */
function calcularDescuento(costo, porcentaje) {
    const descuento = costo * (porcentaje / 100);
    return Number((costo - descuento).toFixed(2));
}
function resumenServicio(servicio, costo, descuento) {
    const costoFinal = calcularDescuento(costo, descuento);
    return `${servicio}: $${costo} → $${costoFinal} (${descuento}% de descuento)`;
}
console.log(resumenServicio("Cambio de aceite", 45, 10));
console.log(resumenServicio("Alineación", 30, 15));
console.log(resumenServicio("Balanceo", 25, 0));
/* Área de una bahía del taller */
function areaBahia(ancho, largo) {
    return ancho * largo;
}
function perimetroBahia(ancho, largo) {
    return 2 * (ancho + largo);
}
const ancho = 8;
const largo = 5;
console.log(`Área de la bahía: ${areaBahia(ancho, largo)} m²`);
console.log(`Perímetro de la bahía: ${perimetroBahia(ancho, largo)} m`);
