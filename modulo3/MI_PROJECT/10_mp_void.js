"use strict";
// tipo-void.ts
function registrarVehiculo(placa) {
    console.log(`Vehículo con placa ${placa} registrado correctamente.`);
    // No hay return — esta función solo realiza una acción, no devuelve nada
}
registrarVehiculo("ABC-1234");
// Comparación: esto sí devuelve algo
function calcularCosto(costo) {
    return costo * 2;
}
const resultado = calcularCosto(45.50);
console.log(resultado); // 91
