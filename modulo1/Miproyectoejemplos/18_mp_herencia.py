# herencia_taller_mecanico.py

class Vehiculo:
    def __init__(self, cliente, modelo, año):
        self.cliente = cliente
        self.modelo = modelo
        self.año = año
        self._estado = "En revisión"   # atributo protegido

    def cambiar_estado(self, nuevo_estado):
        self._estado = nuevo_estado
        return self

    def __str__(self):
        return (
            f"Vehículo de {self.cliente} | "
            f"{self.modelo} ({self.año}) "
            f"- Estado: {self._estado}"
        )


class Auto(Vehiculo):
    def __init__(self, cliente, modelo, año, puertas=4):
        super().__init__(cliente, modelo, año)
        self.puertas = puertas

    def diagnostico(self):
        return (
            f"El auto {self.modelo} de {self.cliente} "
            f"está listo para diagnóstico."
        )

    def __str__(self):
        return f"{super().__str__()} ({self.puertas} puertas)"


class Moto(Vehiculo):
    def __init__(self, cliente, modelo, año, cilindrada):
        super().__init__(cliente, modelo, año)
        self.cilindrada = cilindrada

    def prueba_motor(self):
        return (
            f"La moto {self.modelo} está en prueba de motor."
        )

    def __str__(self):
        return f"{super().__str__()} ({self.cilindrada}cc)"


class AutoElectrico(Auto):
    def __init__(self, cliente, modelo, año, autonomia):
        super().__init__(cliente, modelo, año)
        self.__autonomia = autonomia
        self.__bateria = 100

    def cargar_bateria(self, porcentaje=100):
        self.__bateria = min(100, self.__bateria + porcentaje)
        return self

    @property
    def autonomia_restante(self):
        return self.__autonomia * self.__bateria / 100

    def __str__(self):
        return (
            f"{super().__str__()} | "
            f"Batería: {self.__bateria}% | "
            f"Autonomía restante: "
            f"{self.autonomia_restante:.0f} km"
        )


# Crear objeto
tesla = AutoElectrico(
    "Carlos Pérez",
    "Tesla Model 3",
    2024,
    500
)

# Cambiar estado del vehículo
tesla.cambiar_estado("Reparado")

# Mostrar información
print(tesla)

# Verificar herencia
print(isinstance(tesla, AutoElectrico))  # True
print(isinstance(tesla, Auto))           # True
print(isinstance(tesla, Vehiculo))       # True
print(isinstance(tesla, Moto))           # False

# MRO — Method Resolution Order
print(AutoElectrico.__mro__)