// Concepto puro
interface Serializable {
  serializar(): string;
}

interface Validable {
  esValido(): boolean;
}

class OrdenTrabajo implements Serializable, Validable {
  constructor(
    public numeroOrden: string,
    public servicios: string[],
    public costoTotal: number
  ) {}

  serializar(): string {
    return JSON.stringify({
      numeroOrden: this.numeroOrden,
      servicios: this.servicios,
      costoTotal: this.costoTotal,
    });
  }

  esValido(): boolean {
    return this.servicios.length > 0 && this.costoTotal > 0;
  }
}

const orden = new OrdenTrabajo(
  "OT-001",
  ["Cambio de aceite", "Alineación"],
  150
);

console.log(orden.esValido());
// true

console.log(orden.serializar());
// {"numeroOrden":"OT-001","servicios":["Cambio de aceite","Alineación"],"costoTotal":150}