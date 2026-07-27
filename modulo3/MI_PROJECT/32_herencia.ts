// Concepto puro
class Vehiculo {
  constructor(public placa: string) {}

  describir(): string {
    return `El vehículo ${this.placa} está registrado en el taller.`;
  }
}

class Automovil extends Vehiculo {
  constructor(
    placa: string,
    public marca: string
  ) {
    super(placa); // llama al constructor del padre
  }

  // override sobrescribe el método del padre
  override describir(): string {
    return `El automóvil ${this.placa} es de la marca ${this.marca}.`;
  }

  ingresarReparacion(servicio: string): string {
    return `${this.placa} ingresa para ${servicio}.`;
  }
}

const vehiculo = new Vehiculo("ABC-123");
const automovil = new Automovil("XYZ-789", "Toyota");

console.log(vehiculo.describir());
// El vehículo ABC-123 está registrado en el taller.

console.log(automovil.describir());
// El automóvil XYZ-789 es de la marca Toyota.

console.log(automovil.ingresarReparacion("cambio de aceite"));
// XYZ-789 ingresa para cambio de aceite.

console.log(automovil.marca);
// Toyota