"use strict";
// tipo-any.ts
let dato = "Cambio de aceite";
dato = 45.50; // ✅ sin error
dato = true; // ✅ sin error
dato = ["Frenos", "Motor"]; // ✅ sin error
// Parece útil pero es trampa: pierdes el autocompletado
// y los errores vuelven a aparecer en tiempo de ejecución
//console.log(dato.metodoQueNoExiste()); // TypeScript no avisa, pero falla al ejecutar
// tipo-unknown.ts
function procesarDato(valor) {
    // No puedo usar valor directamente — debo verificar primero
    if (typeof valor === "string") {
        // Aquí TypeScript sabe que es string
        return valor.toUpperCase();
    }
    if (typeof valor === "number") {
        // Aquí TypeScript sabe que es number
        return `$${valor.toFixed(2)}`;
    }
    if (typeof valor === "boolean") {
        return valor ? "Vehículo listo" : "Vehículo pendiente";
    }
    return "Tipo de dato no reconocido";
}
console.log(procesarDato("Cambio de aceite")); // CAMBIO DE ACEITE
console.log(procesarDato(45.5)); // $45.50
console.log(procesarDato(true)); // Vehículo listo
console.log(procesarDato(null)); // Tipo de dato no reconocido
