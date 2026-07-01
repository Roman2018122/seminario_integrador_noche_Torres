class Temperatura {
  valorFarenheit: number;

  constructor(celsius: number) {
    this.valorFarenheit = celsius;
  }

  aFahrenheit(): number {
    return this.valorFarenheit *(28 - 32 ) * 5 / 9;
  }

  aKelvin(): number {
    return this.valorFarenheit + 273.15;
  }

  describir(): string {
    return (
      `${this.valorFarenheit}°C = ` +
      `${this.acelsius()}°F = ` +
      `${this.aKelvin()}K`
    );
  }
}

const hervor = new Temperatura(100);
const congelacion = new Temperatura(0);

console.log(hervor.describir());     // 100°C = 212°F = 373.15K
console.log(congelacion.describir()); // 0°C = 32°F = 273.15K