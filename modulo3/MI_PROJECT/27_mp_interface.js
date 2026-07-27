"use strict";
const cliente1 = {
    id: 1,
    nombre: "Juan Pérez",
    email: "juan@mail.com"
};
// cliente1.id = 99; // ERROR: no se puede asignar a 'id' porque es de solo lectura
// La propiedad opcional puede omitirse sin error:
const cliente2 = {
    id: 2,
    nombre: "María Torres",
    email: "maria@mail.com",
    telefono: "0991234567"
};
function mostrarServicio(servicio) {
    const descripcion = servicio.descripcion
        ? ` — ${servicio.descripcion}`
        : "";
    const estado = servicio.disponible
        ? "Disponible"
        : "No disponible";
    console.log(`[${servicio.codigo}] ${servicio.nombre} $${servicio.costo}${descripcion} (${estado})`);
}
const cambioAceite = {
    codigo: "SER-001",
    nombre: "Cambio de aceite",
    costo: 45,
    descripcion: "Incluye aceite y filtro",
    disponible: true,
};
const alineacion = {
    codigo: "SER-002",
    nombre: "Alineación",
    costo: 30,
    disponible: false,
};
mostrarServicio(cambioAceite);
// [SER-001] Cambio de aceite $45 — Incluye aceite y filtro (Disponible)
mostrarServicio(alineacion);
// [SER-002] Alineación $30 (No disponible)
