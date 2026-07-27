// tipos-string.ts
const nombre: string = "Toyota Corolla";
const propietario: string = `Hola, el propietario del vehículo es Carlos Gómez`;
const servicio: string = "Cambio de aceite";
const color: string = "Beige";

console.log(nombre);
console.log(propietario);
console.log(`Color del vehículo: ${color}`);

// Métodos de string funcionan igual que en JS
console.log(nombre.toUpperCase());      // TOYOTA COROLLA
console.log(nombre.toLowerCase());      // toyota corolla
console.log(nombre.includes("Toyota")); // true
console.log(nombre.split(" "));         // ["Toyota", "Corolla"]