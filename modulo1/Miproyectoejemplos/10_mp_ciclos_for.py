print("Ciclo FOR en un Taller Mecánico")

print("For básico")

for i in range(1, 6):
    print(f"Vehículo atendido #{i}")

tipos_autos = [
    "Camionetas",
    "Deportivos",
    "Sedanes"
]

for auto in tipos_autos:
    print(auto)


print("Control de interrupción")

for i in range(1, 10):

    if i == 3:continue
    if i == 7:break

    print(f"Repuesto revisado #{i}")

else:
    print("Terminado el ciclo")


print("For con range step")

for i in range(0, 10, 2):
    print(f"Bahía del taller #{i}")


print("For con range regresivo")

for i in range(10, 0, -1):
    print(f"Turno restante: {i}")


print("For con enumerate")

marcas = ["Toyota","Mazda","Chevrolet","BMW"
]

for indice, nombre in enumerate(marcas):
    print(indice, nombre)


print("For con zip")

años = [2018, 2020, 2021, 2024]

for marca, año in zip(marcas, años):
    print(marca, año)


print("For anidados")

for i in range(1, 4):

    for x in range(1, 4):
        print(
            f"Bahía {i} - "
            f"Mecánico {x}"
        )


cantidad = int(
    input("Ingrese cantidad de repuestos: ")
)

suma = 0

for i in range(1, cantidad + 1):

    repuesto = float(
        input(f"Costo del repuesto {i}: ")
    )

    suma += repuesto

promedio = suma / cantidad

print("Costo promedio:", promedio)

if promedio >= 7:
    print("Descuento del 10%")
else:
    print("No hay descuento")