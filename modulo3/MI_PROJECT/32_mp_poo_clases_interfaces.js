"use strict";
class OrdenTrabajo {
    numeroOrden;
    servicios;
    costoTotal;
    constructor(numeroOrden, servicios, costoTotal) {
        this.numeroOrden = numeroOrden;
        this.servicios = servicios;
        this.costoTotal = costoTotal;
    }
    serializar() {
        return JSON.stringify({
            numeroOrden: this.numeroOrden,
            servicios: this.servicios,
            costoTotal: this.costoTotal,
        });
    }
    esValido() {
        return this.servicios.length > 0 && this.costoTotal > 0;
    }
}
const orden = new OrdenTrabajo("OT-001", ["Cambio de aceite", "Alineación"], 150);
console.log(orden.esValido());
// true
console.log(orden.serializar());
// {"numeroOrden":"OT-001","servicios":["Cambio de aceite","Alineación"],"costoTotal":150}
