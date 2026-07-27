"use strict";
// Concepto puro
const costosServicios = [45, 80, 120, 60];
// forEach: para "hacer algo" con cada elemento
costosServicios.forEach((costo) => console.log(`Costo del servicio: $${costo}`));
// map: para CREAR una lista transformada
const costosConDescuento = costosServicios.map((costo) => Number((costo * 0.90).toFixed(2)));
console.log(costosConDescuento); // [40.5, 72, 108, 54]
/* Ejercicio de descuento */
const costos = [100, 250, 80, 500];
const costosFinales = costos.map((costo) => Number((costo * 0.90).toFixed(2)));
costosFinales.forEach((costo, indice) => console.log(`Servicio ${indice + 1}: $${costo}`));
