// tipos-boolean.ts
const vehiculoListo: boolean = true;
const facturaPagada: boolean = false;

console.log(vehiculoListo);
console.log(!vehiculoListo);                  // false (negación)
console.log(vehiculoListo && facturaPagada);  // false (ambos deben ser true)
console.log(vehiculoListo || facturaPagada);  // true (al menos uno es true)

// Los booleanos suelen venir de comparaciones
const kilometraje = 120000;
const requiereMantenimiento: boolean = kilometraje >= 100000;

console.log(`¿El vehículo requiere mantenimiento? ${requiereMantenimiento}`);