# primera-clase-taller.py

class Mecanico:

    # Atributo de clase
    # compartido por todas las instancias
    taller = "AutoFix Taller Mecánico"

    # Constructor
    def __init__(self, nombre, especialidad):

        # Atributos de instancia
        self.nombre = nombre
        self.especialidad = especialidad

    # Método de instancia
    def presentarse(self):

        return (
            f"Hola, soy {self.nombre} "
            f"y mi especialidad es "
            f"{self.especialidad}."
        )

    def reparar_vehiculo(self):

        print(
            f"{self.nombre} está "
            f"reparando un vehículo."
        )

    # Representación legible
    def __str__(self):

        return (
            f"Mecanico("
            f"{self.nombre}, "
            f"{self.especialidad})"
        )

    # Representación oficial
    def __repr__(self):

        return (
            f"Mecanico("
            f"nombre={self.nombre!r}, "
            f"especialidad={self.especialidad!r})"
        )


# Crear objetos
mecanico1 = Mecanico(
    "Carlos Pérez",
    "Motores"
)

mecanico2 = Mecanico(
    "Ana López",
    "Electricidad Automotriz"
)

# Uso de métodos
print(mecanico1.presentarse())

print(mecanico2.presentarse())

mecanico1.reparar_vehiculo()

# Uso de __str__
print(str(mecanico1))

# Uso de __repr__
print(repr(mecanico1))

# Acceso al atributo de clase
print(Mecanico.taller)