"use strict";
// Concepto puro
class Vehiculo {
    placa;
    marca;
    enReparacion;
    constructor(placa, marca, enReparacion) {
        this.placa = placa;
        this.marca = marca;
        this.enReparacion = enReparacion;
    }
    // Método: acción que puede realizar la instancia
    describir() {
        const estado = this.enReparacion ? "en reparación" : "listo para entregar";
        return `${this.marca} (${this.placa}) — ${estado}`;
    }
}
const vehiculo1 = new Vehiculo("ABC-123", "Toyota Corolla", true);
const vehiculo2 = new Vehiculo("XYZ-789", "Chevrolet Spark", false);
console.log(vehiculo1.describir());
// Toyota Corolla (ABC-123) — en reparación
console.log(vehiculo2.describir());
// Chevrolet Spark (XYZ-789) — listo para entregar
