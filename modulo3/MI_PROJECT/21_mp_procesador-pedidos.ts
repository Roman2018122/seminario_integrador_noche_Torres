// procesador-ordenes.ts

type OrdenTrabajo = {
  id: number;
  cliente: string;
  costo: number;
  estado: "recibido" | "en_reparacion" | "entregado";
};

function procesarOrdenes(ordenes: OrdenTrabajo[]): void {
  console.log("=== RESUMEN DE ÓRDENES DE TRABAJO ===\n");

  let totalFacturado: number = 0;
  let ordenesRecibidas: number = 0;
  let ordenesEntregadas: number = 0;

  for (const orden of ordenes) {
    // Switch para el estado
    switch (orden.estado) {
      case "entregado":
        totalFacturado += orden.costo;
        ordenesEntregadas++;
        console.log(`✅ #${orden.id} ${orden.cliente.padEnd(15)} $${orden.costo}`);
        break;

      case "recibido":
        ordenesRecibidas++;
        console.log(`⏳ #${orden.id} ${orden.cliente.padEnd(15)} $${orden.costo}`);
        break;

      case "en_reparacion":
        console.log(`🔧 #${orden.id} ${orden.cliente.padEnd(15)} EN REPARACIÓN`);
        break;
    }
  }

  console.log("\n--- Estadísticas ---");
  console.log(`  Entregadas: ${ordenesEntregadas} | Facturado: $${totalFacturado}`);
  console.log(`  Recibidas:  ${ordenesRecibidas}`);
  console.log(`  Total órdenes: ${ordenes.length}`);
}

const ordenes: OrdenTrabajo[] = [
  { id: 1, cliente: "Juan Pérez",    costo: 150, estado: "entregado" },
  { id: 2, cliente: "María Torres",  costo: 320, estado: "recibido" },
  { id: 3, cliente: "Carlos Mendoza", costo: 75, estado: "entregado" },
  { id: 4, cliente: "Ana López",     costo: 200, estado: "en_reparacion" },
  { id: 5, cliente: "Pedro Gómez",   costo: 490, estado: "entregado" },
  { id: 6, cliente: "Laura Vega",    costo: 110, estado: "recibido" },
];

procesarOrdenes(ordenes);