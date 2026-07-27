"use strict";
// break-continue.ts
// break — sale del bucle
console.log("Buscar el primer servicio con costo mayor a $50:");
const costos = [23, 45, 12, 67, 34, 89, 56];
for (const costo of costos) {
    if (costo > 50) {
        console.log(`  Servicio encontrado: $${costo}`);
        break; // para de buscar
    }
    console.log(`  $${costo} no es mayor a $50`);
}
// continue — salta a la siguiente iteración
console.log("\nSolo vehículos con número de bahía par:");
for (let bahia = 1; bahia <= 10; bahia++) {
    if (bahia % 2 !== 0)
        continue; // salta las bahías impares
    console.log(`  Bahía ${bahia}`);
}
// Útil para saltar valores inválidos
const kilometrajes = [
    12000,
    null,
    35000,
    null,
    18000,
    25000
];
let kilometrajeTotal = 0;
for (const kilometraje of kilometrajes) {
    if (kilometraje === null)
        continue; // salta los valores null
    // Aquí TypeScript sabe que kilometraje es number
    kilometrajeTotal += kilometraje;
}
console.log(`\nKilometraje total: ${kilometrajeTotal} km`);
