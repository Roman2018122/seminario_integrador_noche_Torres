// condicionales.ts

const kilometraje: number = 85000;

if (kilometraje > 100000) {
  console.log("El vehículo requiere mantenimiento mayor");
} else if (kilometraje > 50000) {
  console.log("El vehículo requiere mantenimiento preventivo"); // ← este se ejecuta
} else if (kilometraje > 10000) {
  console.log("El vehículo está en buen estado");
} else {
  console.log("Vehículo prácticamente nuevo");
}

// Con boolean
const vehiculoListo: boolean = true;

if (vehiculoListo) {
  console.log("El vehículo puede ser entregado");
} else {
  console.log("El vehículo continúa en reparación");
}

// Con string
const rol: string = "admin";

if (rol === "admin") {
  console.log("Acceso total al sistema");
} else if (rol === "empleado") {
  console.log("Puede gestionar órdenes de trabajo");
} else {
  console.log("Acceso solo de consulta");
}