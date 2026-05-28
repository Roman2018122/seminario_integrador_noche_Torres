# encapsulamiento_taller.py

class VehiculoTaller:
    def __init__(self, cliente, modelo, costo_inicial=0):
        self.cliente = cliente
        self.__costo_reparacion = costo_inicial   # atributo privado
        self.__historial = []
        self.__en_reparacion = True
        self.__registrar(
            f"Vehículo ingresado al taller con costo inicial de ${costo_inicial}"
        )

    # Getter del costo
    @property
    def costo_reparacion(self):
        return self.__costo_reparacion

    # Getter del estado
    @property
    def en_reparacion(self):
        return self.__en_reparacion

    # Getter del historial
    @property
    def historial(self):
        return list(self.__historial)

    # Método público
    def agregar_reparacion(self, costo):
        if costo <= 0:
            raise ValueError("El costo debe ser positivo")

        self.__costo_reparacion += costo
        self.__registrar(f"Reparación agregada: +${costo}")
        return self

    def aplicar_descuento(self, descuento):
        if descuento <= 0:
            raise ValueError("El descuento debe ser positivo")

        if descuento > self.__costo_reparacion:
            raise ValueError(
                f"El descuento supera el costo actual (${self.__costo_reparacion})"
            )

        self.__costo_reparacion -= descuento
        self.__registrar(f"Descuento aplicado: -${descuento}")
        return self

    def transferir_servicio(self, otro_vehiculo, costo):
        self.aplicar_descuento(costo)
        otro_vehiculo.agregar_reparacion(costo)

        self.__registrar(
            f"Transferencia de servicio a {otro_vehiculo.cliente}: -${costo}"
        )
        return self

    # Método privado
    def __registrar(self, operacion):
        from datetime import datetime

        hora = datetime.now().strftime("%H:%M:%S")
        self.__historial.append(f"[{hora}] {operacion}")

    def __str__(self):
        return (
            f"VehiculoTaller({self.cliente}: "
            f"${self.__costo_reparacion})"
        )


# Uso del programa
v1 = VehiculoTaller("Carlos Pérez", "Toyota Corolla", 300)
v2 = VehiculoTaller("Ana López", "Chevrolet Spark", 150)

# Encadenamiento de métodos
v1.agregar_reparacion(200).aplicar_descuento(50)

# Transferencia de servicio
v1.transferir_servicio(v2, 100)

print(v1)
print(v2)

print(f"Costo total de Carlos: ${v1.costo_reparacion}")

# Acceso directo denegado
# v1.__costo_reparacion = 9999

for entrada in v1.historial:
    print(f"  {entrada}")