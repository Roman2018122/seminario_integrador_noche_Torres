// Concepto puro
class OrdenTrabajo {
  readonly numeroOrden: string;      // no cambia tras la creación
  public cliente: string;            // visible desde fuera
  private costoTotal: number;        // solo accesible dentro de la clase
  protected estado: string;          // accesible también en subclases

  constructor(numeroOrden: string, cliente: string, costoInicial: number) {
    this.numeroOrden = numeroOrden;
    this.cliente = cliente;
    this.costoTotal = costoInicial;
    this.estado = "Recibido";
  }

  // Método público que expone el costo de forma controlada
  obtenerCostoTotal(): number {
    return this.costoTotal;
  }

  agregarServicio(costo: number): void {
    if (costo <= 0) throw new Error("Costo inválido");
    this.costoTotal += costo;
  }
}

const orden = new OrdenTrabajo("OT-001", "Juan Pérez", 150);

console.log(orden.cliente);              // Juan Pérez
console.log(orden.numeroOrden);          // OT-001
console.log(orden.obtenerCostoTotal());  // 150

orden.agregarServicio(50);

console.log(orden.obtenerCostoTotal());  // 200

// orden.costoTotal = 500;      // Error: 'costoTotal' is private
// orden.numeroOrden = "OT-002"; // Error: 'numeroOrden' is readonly