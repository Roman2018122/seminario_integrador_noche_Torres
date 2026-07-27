"use strict";
// Concepto puro
class OrdenTrabajo {
    numeroOrden; // no cambia tras la creación
    cliente; // visible desde fuera
    costoTotal; // solo accesible dentro de la clase
    estado; // accesible también en subclases
    constructor(numeroOrden, cliente, costoInicial) {
        this.numeroOrden = numeroOrden;
        this.cliente = cliente;
        this.costoTotal = costoInicial;
        this.estado = "Recibido";
    }
    // Método público que expone el costo de forma controlada
    obtenerCostoTotal() {
        return this.costoTotal;
    }
    agregarServicio(costo) {
        if (costo <= 0)
            throw new Error("Costo inválido");
        this.costoTotal += costo;
    }
}
const orden = new OrdenTrabajo("OT-001", "Juan Pérez", 150);
console.log(orden.cliente); // Juan Pérez
console.log(orden.numeroOrden); // OT-001
console.log(orden.obtenerCostoTotal()); // 150
orden.agregarServicio(50);
console.log(orden.obtenerCostoTotal()); // 200
// orden.costoTotal = 500;      // Error: 'costoTotal' is private
// orden.numeroOrden = "OT-002"; // Error: 'numeroOrden' is readonly
