// ternario.ts

const kilometraje: number = 85000;

// Forma larga
let mantenimiento: string;

if (kilometraje >= 50000) {
  mantenimiento = "Requiere mantenimiento preventivo";
} else {
  mantenimiento = "No requiere mantenimiento";
}

// Forma corta con ternario
const mantenimiento2: string =
  kilometraje >= 50000
    ? "Requiere mantenimiento preventivo"
    : "No requiere mantenimiento";

console.log(mantenimiento);   // Requiere mantenimiento preventivo
console.log(mantenimiento2);  // Requiere mantenimiento preventivo

// Muy útil dentro de template literals
const costoServicio: number = 45.50;
const estadoPago =
  costoServicio >= 40 ? "Servicio mayor" : "Servicio básico";

console.log(`Costo: $${costoServicio} — ${estadoPago}`);

// No anidar ternarios — difícil de leer
// ✅ Mejor usar if/else para tres o más casos
const prioridad =
  costoServicio >= 100 ? "Alta" :
  costoServicio >= 60  ? "Media" :
  costoServicio >= 40  ? "Baja"  : "Mínima";

console.log(prioridad); // Baja