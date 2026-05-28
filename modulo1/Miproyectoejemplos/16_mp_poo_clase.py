# taller-mecanico.py

class Vehiculo:
    # Atributo de clase — compartido por TODOS los vehículos
    tipo_negocio = "Taller Mecánico"

    # Constructor
    def __init__(self, cliente, modelo, kilometraje):
        # Atributos de instancia
        self.cliente = cliente
        self.modelo = modelo
        self.kilometraje = kilometraje

    # Método de instancia
    def mostrar_info(self):
        return f"El vehículo de {self.cliente} es un {self.modelo} con {self.kilometraje} km."

    def realizar_mantenimiento(self):
        print(f"Se realizó mantenimiento al vehículo de {self.cliente}.")

    # Representación legible
    def __str__(self):
        return f"Vehiculo({self.cliente}, {self.modelo}, {self.kilometraje} km)"

    # Representación oficial
    def __repr__(self):
        return (
            f"Vehiculo(cliente={self.cliente!r}, "
            f"modelo={self.modelo!r}, "
            f"kilometraje={self.kilometraje!r})"
        )

# Crear objetos
vehiculo1 = Vehiculo("Carlos Pérez", "Toyota Corolla", 85000)
vehiculo2 = Vehiculo("Ana López", "Chevrolet Spark", 62000)

# Mostrar información
print(vehiculo1.mostrar_info())
print(vehiculo2.mostrar_info())

# Realizar mantenimiento
vehiculo1.realizar_mantenimiento()

# Uso de __str__ y __repr__
print(str(vehiculo1))
print(repr(vehiculo1))

# Atributo de clase
print(Vehiculo.tipo_negocio)