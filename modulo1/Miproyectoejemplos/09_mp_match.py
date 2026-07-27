print("Match - Case en un Taller Mecánico")

servicio = input(
    "Ingrese servicio "
    "(revision/reparacion/lavado): "
)

match servicio:

    case "revision":
        print("Vehículo ingresado a revisión")

    case "reparacion":
        print("Vehículo enviado al área de reparación")

    case "lavado":
        print("Vehículo enviado al área de lavado")

    case _:
        print(f"Servicio {servicio} no válido")


print("Match - Case con condiciones")

kilometraje = int(
    input("Ingrese kilometraje del vehículo: ")
)

match kilometraje:

    case km if km < 0:
        print(f"{km} es un kilometraje inválido")

    case 0:
        print("Vehículo nuevo")

    case km if km % 2 == 0:
        print(
            f"El vehículo tiene "
            f"{km} km y el número es par"
        )

    case km:
        print(
            f"El vehículo tiene "
            f"{km} km y el número es impar"
        )