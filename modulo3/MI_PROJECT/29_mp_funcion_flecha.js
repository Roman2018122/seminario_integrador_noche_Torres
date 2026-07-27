"use strict";
// Concepto puro
// Declaración tradicional
function calcularCosto(costo) {
    return costo * costo;
}
// Flecha equivalente — con cuerpo explícito
const calcularCostoFlecha = (costo) => {
    return costo * costo;
};
// Flecha con retorno implícito (una expresión, sin llaves)
const calcularCostoCorto = (costo) => costo * costo;
// Sin parámetros
const horaActual = () => new Date().toLocaleTimeString();
// Un solo parámetro (paréntesis opcionales, pero recomendados en TS)
const costoDoble = (costo) => costo * 2;
console.log(calcularCosto(5)); // 25
console.log(calcularCostoFlecha(5)); // 25
console.log(calcularCostoCorto(5)); // 25
console.log(costoDoble(7)); // 14
console.log(horaActual()); // Ejemplo: "10:34:22"
/* Ejemplo aplicado — transformación del nombre de un servicio */
const quitarEspacios = (texto) => texto.trim();
const aMinusculas = (texto) => texto.toLowerCase();
const capitalizar = (texto) => texto.charAt(0).toUpperCase() + texto.slice(1);
const reemplazarEspacios = (texto) => texto.replace(/\s+/g, "_");
// Encadenar transformaciones manualmente
function normalizarServicio(servicio) {
    return reemplazarEspacios(capitalizar(aMinusculas(quitarEspacios(servicio))));
}
const servicios = [
    "  CAMBIO DE ACEITE  ",
    " alineación",
    "REVISIÓN  DE FRENOS "
];
servicios.forEach((servicio) => console.log(normalizarServicio(servicio)));
// Cambio_de_aceite
// Alineación
// Revisión_de_frenos
/* Mini-ejercicio — funciones flecha con retorno implícito */
const requiereMantenimiento = (kilometraje) => kilometraje >= 100000;
const vehiculoListo = (estado) => estado;
const aplicarDescuento = (costo) => Number((costo * 0.90).toFixed(2));
console.log(`requiereMantenimiento(120000): ${requiereMantenimiento(120000)}`);
console.log(`vehiculoListo(true): ${vehiculoListo(true)}`);
console.log(`aplicarDescuento(150): $${aplicarDescuento(150)}`);
