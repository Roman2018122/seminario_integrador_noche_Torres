// switch.ts

const estadoOrden: number = 3;

switch (estadoOrden) {
  case 1:
    console.log("Vehículo recibido");
    break;
  case 2:
    console.log("En diagnóstico");
    break;
  case 3:
    console.log("En reparación"); // ← este se ejecuta
    break;
  case 4:
    console.log("Listo para entrega");
    break;
  case 5:
    console.log("Vehículo entregado");
    break;
  case 6:
  case 7:
    console.log("Taller cerrado");
    break;
  default:
    console.log("Estado no válido");
}

// Switch con string
type EstadoCita =
  | "pendiente"
  | "confirmada"
  | "completada"
  | "cancelada";

function mensajeCita(estado: EstadoCita): string {
  switch (estado) {
    case "pendiente":
      return "Tu cita está pendiente de confirmación";
    case "confirmada":
      return "Tu cita ha sido confirmada";
    case "completada":
      return "El servicio de tu vehículo fue completado";
    case "cancelada":
      return "Tu cita fue cancelada";
  }
}

// TypeScript sabe que los 4 casos son todos los posibles
// No necesita default — si añades un estado nuevo, exige manejarlo

console.log(mensajeCita("confirmada"));  // Tu cita ha sido confirmada
console.log(mensajeCita("completada"));  // El servicio de tu vehículo fue completado