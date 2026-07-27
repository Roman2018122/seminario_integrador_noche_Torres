"use strict";
// bucle-while.ts
// While básico
let vehiculosPendientes = 1;
while (vehiculosPendientes <= 5) {
    console.log(`Vehículo ${vehiculosPendientes} ingresó al taller`);
    vehiculosPendientes++;
}
// do...while — se ejecuta al menos una vez
let kilometrajeRestante = 10000;
do {
    console.log(`Kilometraje restante para el mantenimiento: ${kilometrajeRestante} km`);
    kilometrajeRestante -= 3000;
} while (kilometrajeRestante > 0);
// Mientras con TypeScript — buscar una placa
function buscarPlaca() {
    const placaBuscada = "ABC-1234";
    const placas = [
        "XYZ-9876",
        "DEF-5678",
        "LMN-4321",
        placaBuscada
    ];
    let indice = 0;
    let encontrada = false;
    while (indice < placas.length && !encontrada) {
        const placa = placas[indice];
        indice++;
        if (placa === placaBuscada) {
            console.log(`¡Vehículo encontrado! Placa: ${placaBuscada} (posición ${indice})`);
            encontrada = true;
        }
        else {
            console.log(`${placa} → No corresponde al vehículo buscado`);
        }
    }
}
buscarPlaca();
