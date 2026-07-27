// Concepto puro
class Vehiculo {
  private _kilometraje: number;

  constructor(kilometraje: number) {
    this._kilometraje = kilometraje;
  }

  get kilometraje(): number {
    return this._kilometraje;
  }

  set kilometraje(valor: number) {
    if (valor < 0) throw new Error("El kilometraje no puede ser negativo");
    this._kilometraje = valor;
  }

  get proximoMantenimiento(): number {
    return this._kilometraje + 10000;
  }
}

const vehiculo = new Vehiculo(50000);

console.log(vehiculo.kilometraje);           // 50000 ← usa el getter
console.log(vehiculo.proximoMantenimiento);  // 60000

vehiculo.kilometraje = 65000;                // usa el setter

console.log(vehiculo.proximoMantenimiento);  // 75000

// vehiculo.kilometraje = -500;
// Error: El kilometraje no puede ser negativo