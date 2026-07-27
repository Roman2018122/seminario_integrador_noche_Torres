// Concepto puro

// El rest parameter SIEMPRE es el último
function sumarCostos(...costos: number[]): number {
  return costos.reduce((acumulado, costo) => acumulado + costo, 0);
}

console.log(sumarCostos(45, 30, 80));          // 155
console.log(sumarCostos(100, 50, 25, 75));     // 250
console.log(sumarCostos());                    // 0

// Combinado con parámetros normales
function construirUbicacion(
  taller: string,
  ...areas: string[]
): string {
  return [taller, ...areas].join("/");
}

console.log(
  construirUbicacion(
    "TallerMecanico",
    "Recepción",
    "Bahía-1",
    "Elevador"
  )
);

// TallerMecanico/Recepción/Bahía-1/Elevador


/* Ejemplo aplicado — sistema de registro del taller */

function registrarEvento(
  tipo: string,
  ...detalles: string[]
): void {

  const hora = new Date().toLocaleTimeString();

  const informacion =
    detalles.length > 0
      ? ` | ${detalles.join(" · ")}`
      : "";

  console.log(
    `[${hora}] ${tipo.toUpperCase()}${informacion}`
  );
}

registrarEvento("inicio");
// [10:05:01] INICIO

registrarEvento(
  "vehículo recibido",
  "cliente: Juan Pérez",
  "placa: ABC-123"
);
// [10:05:02] VEHÍCULO RECIBIDO | cliente: Juan Pérez · placa: ABC-123

registrarEvento(
  "error",
  "módulo: órdenes",
  "código: 500",
  "reintento: sí"
);
// [10:05:03] ERROR | módulo: órdenes · código: 500 · reintento: sí


/* Mini-ejercicio — costo más alto y más bajo */

function costoMayor(
  primero: number,
  ...resto: number[]
): number {
  return Math.max(primero, ...resto);
}

function costoMenor(
  primero: number,
  ...resto: number[]
): number {
  return Math.min(primero, ...resto);
}

console.log(
  `Costo mayor: ${costoMayor(45, 80, 30, 120, 60)}`
);

console.log(
  `Costo menor: ${costoMenor(45, 80, 30, 120, 60)}`
);