// tipos-number.ts
const vehiculosAtendidos: number = 42;
const costoCambioAceite: number = 39.99;
const saldoPendiente: number = -150;
const ingresosAnuales: number = 1_000_000; // el _ es solo visual, no cambia el valor
const costoPromedioPorHora: number = 100 / 3;

console.log(vehiculosAtendidos);
console.log(costoCambioAceite);
console.log(ingresosAnuales);
console.log(costoPromedioPorHora);              // 33.3333...
console.log(costoPromedioPorHora.toFixed(2));   // "33.33"

// Operaciones
console.log(10 + 3);   // 13
console.log(10 - 3);   // 7
console.log(10 * 3);   // 30
console.log(100 / 3);  // 33.333...
console.log(10 % 3);   // 1  (resto de la división)
console.log(2 ** 10);  // 1024  (potencia)