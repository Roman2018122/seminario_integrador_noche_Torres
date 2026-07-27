"use strict";
// tipos-string.ts
const nombre = "Carlos Gómez";
const saludo = `Hola, ${nombre}`;
const vacia = "";
const servicio = "Cambio de aceite";
console.log(nombre);
console.log(saludo);
console.log(`La cadena vacía tiene longitud: ${vacia.length}`);
// Métodos de string aplicados al nombre del cliente
console.log(nombre.toUpperCase()); // CARLOS GÓMEZ
console.log(nombre.toLowerCase()); // carlos gómez
console.log(nombre.includes("Gómez")); // true
console.log(nombre.split(" ")); // ["Carlos", "Gómez"]
// Métodos de string aplicados al servicio
console.log(servicio.toUpperCase()); // CAMBIO DE ACEITE
console.log(servicio.toLowerCase()); // cambio de aceite
console.log(servicio.includes("aceite")); // true
console.log(servicio.split(" ")); // ["Cambio", "de", "aceite"]
