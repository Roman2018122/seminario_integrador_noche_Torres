interface Libro {
  readonly isbn: string;   
  titulo: string;
  autor: string;
  paginas: number;
  prestado?: boolean;      
}


const libro1: Libro = {
  isbn: "123",
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  paginas: 863,
  prestado: true,
};

const libro2: Libro = {
  isbn: "456",
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  paginas: 417,

};

function resumen(l: Libro): string {
  const estado = l.prestado ? "Prestado" : "Disponible";
  return `${l.titulo} (ISBN: ${l.isbn}) — ${estado}`;
}

console.log(resumen(libro1));


console.log(resumen(libro2));
