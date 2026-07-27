// for-of.ts

const servicios: string[] = [
  "Cambio de aceite",
  "Alineación",
  "Balanceo",
  "Revisión de frenos"
];

const costos: number[] = [45.50, 30.00, 25.00, 80.00, 60.00];

// TypeScript sabe que 'servicio' es string
for (const servicio of servicios) {
  console.log(`Servicio disponible: ${servicio}`);
  // servicio.toUpperCase() ✅ — TypeScript sabe que es string
}

// TypeScript sabe que 'costo' es number
let total: number = 0;

for (const costo of costos) {
  total += costo;
  // costo.toFixed(2) ✅ — TypeScript sabe que es number
}

console.log(`Costo total: $${total.toFixed(2)}`);

// Con índice usando entries()
for (const [indice, servicio] of servicios.entries()) {
  console.log(`${indice + 1}. ${servicio}`);
}