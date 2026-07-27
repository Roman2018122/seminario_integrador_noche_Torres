"use strict";
// tipos-string.ts
const nombre = "lars";
const dueño = `hola, ${nombre}`;
const raza = "hasky";
const color = 'beige';
console.log(nombre);
console.log(dueño);
console.log('color ${color}');
// Métodos de string funcionan igual que en JS
console.log(nombre.toUpperCase()); // ANA GARCÍA
console.log(nombre.toLowerCase()); // ana garcía
console.log(nombre.includes("García")); // true
console.log(nombre.split(" ")); // ["Ana", "García"]
