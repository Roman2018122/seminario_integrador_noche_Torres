// tipos-string.ts
const nombre:    string = "lars";
const dueño:    string = `hola, ${nombre}`;
const raza:     string = "hasky";
const color:  string = 'beige';

console.log(nombre);
console.log(dueño);
console.log('color ${color}');
    
    // Métodos de string funcionan igual que en JS
console.log(nombre.toUpperCase());      // ANA GARCÍA
console.log(nombre.toLowerCase());      // ana garcía
console.log(nombre.includes("García")); // true
console.log(nombre.split(" "));         // ["Ana", "García"]