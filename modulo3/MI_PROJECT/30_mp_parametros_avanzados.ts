// Concepto puro

// Opcional: el parámetro puede no llegarse a pasar
function crearEstadoVehiculo(
  estado: string,
  mayusculas?: boolean
): string {
  // Dentro, mayusculas es boolean | undefined
  if (mayusculas) {
    return `[${estado.toUpperCase()}]`;
  }

  return `[${estado}]`;
}

console.log(crearEstadoVehiculo("en reparación"));          // [en reparación]
console.log(crearEstadoVehiculo("listo", true));            // [LISTO]

// Por defecto: si no se pasa, usa el valor indicado
function repetirMensaje(
  mensaje: string,
  veces: number = 3
): string {
  return mensaje.repeat(veces);
}

console.log(repetirMensaje("OK "));     // OK OK OK
console.log(repetirMensaje("OK ", 5));  // OK OK OK OK OK


/* Ejemplo aplicado — constructor de mensajes del taller */

type Nivel = "info" | "advertencia" | "error";

function registrarMensaje(
  mensaje: string,
  nivel: Nivel = "info",
  mostrarHora?: boolean
): string {

  const prefijos: Record<Nivel, string> = {
    info: "ℹ️ INFO",
    advertencia: "⚠️ ADVERTENCIA",
    error: "❌ ERROR",
  };

  const hora = mostrarHora
    ? ` [${new Date().toISOString()}]`
    : "";

  return `${prefijos[nivel]}${hora}: ${mensaje}`;
}

console.log(
  registrarMensaje("Vehículo recibido")
);
// ℹ️ INFO: Vehículo recibido

console.log(
  registrarMensaje("Cambio de aceite próximo", "advertencia")
);
// ⚠️ ADVERTENCIA: Cambio de aceite próximo

console.log(
  registrarMensaje(
    "Error al registrar la orden",
    "error",
    true
  )
);
// ❌ ERROR [2026-...]: Error al registrar la orden


/* Mini-ejercicio — formatear costo */

function formatearCosto(
  costo: number,
  moneda: string = "USD",
  decimales: number = 2
): string {
  return `${moneda} ${costo.toFixed(decimales)}`;
}

console.log(formatearCosto(150));            // USD 150.00
console.log(formatearCosto(80, "EUR"));      // EUR 80.00
console.log(formatearCosto(45.789, "USD", 1)); // USD 45.8