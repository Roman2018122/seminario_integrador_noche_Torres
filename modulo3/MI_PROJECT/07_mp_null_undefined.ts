// null-undefined.ts

// En JS esto no da error, en TS sí (modo estricto)
// let placa: string = null;    // ❌ Error

// Para permitir null hay que declararlo explícitamente
let placa: string | null = null;   // ✅ puede ser string o null

placa = "ABC-1234";
console.log(placa);  // "ABC-1234"

placa = null;
console.log(placa);  // null

// undefined — variable declarada pero sin valor
let mecanicoAsignado: string | undefined;

console.log(mecanicoAsignado);  // undefined

mecanicoAsignado = "Juan Pérez";
console.log(mecanicoAsignado);  // "Juan Pérez"