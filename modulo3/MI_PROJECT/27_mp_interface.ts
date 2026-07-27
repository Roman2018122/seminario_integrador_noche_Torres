// Concepto puro
interface Cliente {
  readonly id: number;      // no se puede cambiar después de crear el objeto
  nombre: string;           // obligatoria
  email: string;            // obligatoria
  telefono?: string;        // opcional: puede estar o no
}

const cliente1: Cliente = {
  id: 1,
  nombre: "Juan Pérez",
  email: "juan@mail.com"
};

// cliente1.id = 99; // ERROR: no se puede asignar a 'id' porque es de solo lectura

// La propiedad opcional puede omitirse sin error:
const cliente2: Cliente = {
  id: 2,
  nombre: "María Torres",
  email: "maria@mail.com",
  telefono: "0991234567"
};

interface Servicio {
  readonly codigo: string;
  nombre: string;
  costo: number;
  descripcion?: string;   // información adicional, no siempre presente
  disponible: boolean;
}

function mostrarServicio(servicio: Servicio): void {
  const descripcion = servicio.descripcion
    ? ` — ${servicio.descripcion}`
    : "";

  const estado = servicio.disponible
    ? "Disponible"
    : "No disponible";

  console.log(
    `[${servicio.codigo}] ${servicio.nombre} $${servicio.costo}${descripcion} (${estado})`
  );
}

const cambioAceite: Servicio = {
  codigo: "SER-001",
  nombre: "Cambio de aceite",
  costo: 45,
  descripcion: "Incluye aceite y filtro",
  disponible: true,
};

const alineacion: Servicio = {
  codigo: "SER-002",
  nombre: "Alineación",
  costo: 30,
  disponible: false,
};

mostrarServicio(cambioAceite);
// [SER-001] Cambio de aceite $45 — Incluye aceite y filtro (Disponible)

mostrarServicio(alineacion);
// [SER-002] Alineación $30 (No disponible)