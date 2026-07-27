// tipos-number.ts
const vehiculosAtendidos: number = 42;
const costoRevision: number = 35.50;
const saldoPendiente: number = -100;
const ingresosAnuales: number = 1_000_000; // el _ es solo visual, no cambia el valor
const costoPromedio: number = 100 / 3;

console.log(vehiculosAtendidos);
console.log(costoRevision);
console.log(ingresosAnuales);
console.log(costoPromedio);               // 33.3333...
console.log(costoPromedio.toFixed(2));    // "33.33"

// Operaciones
console.log(100 + 35);  // 135
console.log(100 - 35);  // 65
console.log(100 * 3);   // 300
console.log(100 / 3);   // 33.333...
console.log(100 % 3);   // 1  (resto de la división)
console.log(2 ** 10);   // 1024  (potencia)