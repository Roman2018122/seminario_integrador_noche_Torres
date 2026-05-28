print("Ciclo WHILE en un Taller Mecánico")

# Contador de vehículos atendidos
contador = 1

while contador <= 5:

    print(f"Vehículo atendido #{contador}")

    contador += 1


# Registro de servicios
dato = ""

while dato != "salir":

    dato = input(
        "Ingrese un servicio "
        "(salir para terminar): "
    )

    print("Servicio registrado:", dato)


# Cálculo de costos
cantidad = int(
    input("¿Cuántos repuestos compró el cliente?: ")
)

total = 0
contador = 1

while contador <= cantidad:

    precio = float(
        input(
            f"Precio del repuesto {contador}: "
        )
    )

    total += precio

    contador += 1

print("Total a pagar:", total)

if total >= 100:
    print("Aplica descuento")
else:
    print("No aplica descuento")