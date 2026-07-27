// tipo-any.ts

let dato: any = "Cambio de aceite";

dato = 45.50;               // ✅ sin error
dato = true;                // ✅ sin error
dato = ["Frenos", "Motor"]; // ✅ sin error

// Parece útil pero es trampa: pierdes el autocompletado
// y los errores vuelven a aparecer en tiempo de ejecución
console.log(dato.metodoQueNoExiste()); // TypeScript no avisa, pero falla al ejecutar