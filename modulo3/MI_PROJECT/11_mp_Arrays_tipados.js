"use strict";
// arrays.ts
const servicios = ["Cambio de aceite", "Alineación", "Balanceo"];
const costos = [45.50, 30.00, 25.00];
const vehiculosListos = [true, false, true];
console.log(servicios);
console.log(servicios[0]); // "Cambio de aceite"
console.log(servicios.length); // 3
// Los métodos de array funcionan igual que en JS
servicios.push("Cambio de frenos");
console.log(servicios);
const serviciosMayusculas = servicios.map(s => s.toUpperCase());
console.log(serviciosMayusculas);
const costosAltos = costos.filter(c => c >= 30);
console.log(costosAltos);
// TypeScript avisa si añades el tipo incorrecto
// servicios.push(42);  // ❌ Error: 'number' no es 'string'
