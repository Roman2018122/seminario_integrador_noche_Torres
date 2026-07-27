// narrowing.ts

function describir(valor: string | number | boolean): string {
  if (typeof valor === "string") {
    // Aquí TypeScript sabe que es string
    // Puedes usar .toUpperCase(), .length, etc.
    return `Servicio en mayúsculas: ${valor.toUpperCase()}`;
  }

  if (typeof valor === "number") {
    // Aquí TypeScript sabe que es number
    // Puedes usar .toFixed(), Math.sqrt(), etc.
    return `Costo con IVA (15%): $${(valor * 1.15).toFixed(2)}`;
  }

  // Aquí solo puede ser boolean
  return valor ? "Vehículo listo para entregar" : "Vehículo aún en reparación";
}

console.log(describir("Cambio de aceite")); // Servicio en mayúsculas: CAMBIO DE ACEITE
console.log(describir(45.50));              // Costo con IVA (15%): $52.33
console.log(describir(true));               // Vehículo listo para entregar

// También funciona con null
function procesarPlaca(placa: string | null): string {
  if (placa === null) {
    return "Vehículo sin placa registrada";
  }

  // Aquí TypeScript sabe que placa es string (descartó null)
  return placa.trim().toUpperCase();
}

console.log(procesarPlaca("  abc-1234  ")); // ABC-1234
console.log(procesarPlaca(null));           // Vehículo sin placa registrada