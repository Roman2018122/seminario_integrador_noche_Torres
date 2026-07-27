"use strict";
// Concepto puro
// void — no hay valor de retorno significativo
function imprimirEstado(texto) {
    console.log(texto);
    // No hay return, o hay un "return;" vacío
}
// never — la función nunca retorna
function lanzarError(mensaje) {
    throw new Error(mensaje);
    // TypeScript sabe que el código tras throw es inalcanzable
}
function procesoTallerActivo() {
    while (true) {
        // proceso permanente de monitoreo del taller, por ejemplo
    }
}
// Inferencia — TypeScript deduce "number"
function calcularCostoTotal(cantidad, precio) {
    return cantidad * precio; // tipo inferido: number
}
// Pero el retorno explícito actúa de contrato:
function calcularCostoPromedio(total, servicios) {
    if (servicios === 0)
        lanzarError("No existen servicios registrados"); // never encaja en cualquier tipo
    return total / servicios;
}
function manejarRespuesta(codigo, datos) {
    if (codigo === 200) {
        console.log(`Éxito: ${datos ?? "sin datos"}`);
        return; // return vacío en void
    }
    procesarError(codigo); // never — el flujo no sigue
}
function procesarError(codigo) {
    const mensajes = {
        400: "Datos de la orden inválidos",
        401: "Usuario no autenticado",
        403: "Sin permisos para realizar esta operación",
        404: "Vehículo no encontrado",
        500: "Error interno del sistema del taller",
    };
    throw new Error(`HTTP ${codigo}: ${mensajes[codigo] ?? "error desconocido"}`);
}
manejarRespuesta(200, "vehículo cargado"); // Éxito: vehículo cargado
// manejarRespuesta(404);                  // Lanza Error: HTTP 404: Vehículo no encontrado
// Mini-ejercicio — función asegurar con never
function fallar(mensaje) {
    throw new Error(mensaje);
}
function asegurar(condicion, mensaje) {
    if (!condicion)
        fallar(mensaje);
}
asegurar(50000 >= 0, "El kilometraje no puede ser negativo");
console.log("asegurar(50000 >= 0): no lanzó");
try {
    asegurar(-500 >= 0, "El kilometraje no puede ser negativo");
}
catch (e) {
    console.log(`asegurar(-500 >= 0): lanzó → ${e.message}`);
}
