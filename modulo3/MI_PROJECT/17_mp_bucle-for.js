"use strict";
// bucle-for.ts
// For clásico
for (let i = 1; i <= 5; i++) {
    console.log(`Vehículo ${i} ingresó al taller`);
}
// Recorrer un array por índice
const servicios = [
    "Cambio de aceite",
    "Alineación",
    "Balanceo",
    "Revisión de frenos"
];
for (let i = 0; i < servicios.length; i++) {
    console.log(`${i + 1}. ${servicios[i]}`);
}
// For hacia atrás
for (let i = servicios.length - 1; i >= 0; i--) {
    console.log(servicios[i]);
}
// Tabla de costos tipada
function tablaCostos(costoServicio) {
    console.log(`\n--- Tabla de costos del servicio de $${costoServicio} ---`);
    for (let i = 1; i <= 10; i++) {
        const costoTotal = costoServicio * i;
        console.log(`${i.toString().padStart(2)} vehículo(s) x $${costoServicio.toFixed(2)} = $${costoTotal.toFixed(2)}`);
    }
}
tablaCostos(25);
