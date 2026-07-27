// tipo-unknown.ts

function procesarDato(valor: unknown): string {
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

  return "Tipo no reconocido";
}

console.log(procesarDato("Cambio de aceite")); // CAMBIO DE ACEITE
console.log(procesarDato(45.5));               // $45.50
console.log(procesarDato(true));               // Vehículo listo
console.log(procesarDato(null));               // Tipo no reconocido