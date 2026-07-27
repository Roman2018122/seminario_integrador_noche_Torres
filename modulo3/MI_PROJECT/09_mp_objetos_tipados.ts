// objetos.ts

// Declarar el tipo del objeto
const vehiculo: { placa: string; kilometraje: number; disponible: boolean } = {
  placa: "ABC-1234",
  kilometraje: 85000,
  disponible: true
};

console.log(vehiculo.placa);
console.log(vehiculo.kilometraje);

// TypeScript avisa si falta una propiedad o tiene el tipo incorrecto
// const vehiculo2: { placa: string; kilometraje: number } = {
//   placa: "XYZ-5678"
//   // ❌ Error: falta 'kilometraje'
// };

// Propiedad opcional — se añade ? después del nombre
const servicio: { nombre: string; costo: number; descuento?: number } = {
  nombre: "Cambio de aceite",
  costo: 45.50
  // descuento es opcional, no hace falta incluirlo
};

console.log(servicio.descuento); // undefined — no se lanza error