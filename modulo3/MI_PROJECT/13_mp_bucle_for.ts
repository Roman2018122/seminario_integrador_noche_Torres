// bucle-for.ts

// For clásico
for (let i = 1; i <= 5; i++) {
  console.log(`Vehículo ${i} revisado`);
}

// Recorrer un array por índice
const servicios: string[] = [
  "Cambio de aceite",
  "Alineación",
  "Balanceo",
  "Cambio de frenos"
];

for (let i = 0; i < servicios.length; i++) {
  console.log(`${i + 1}. ${servicios[i]}`);
}

// For hacia atrás
for (let i = servicios.length - 1; i >= 0; i--) {
  console.log(servicios[i]);
}

// Cálculo del costo total de un servicio
function calcularCostoServicio(costoBase: number): void {
  console.log(`\n--- Costo del servicio con valor base de $${costoBase} ---`);

  for (let i = 1; i <= 10; i++) {
    const resultado: number = costoBase * i;
    console.log(
      `${i} servicio(s): $${resultado.toFixed(2)}`
    );
  }
}

calcularCostoServicio(45.50);