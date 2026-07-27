# polimorfismo_taller.py

# POLIMORFISMO POR HERENCIA — override de métodos

class ServicioTaller:
    """Clase base abstracta."""

    def __init__(self, cliente, vehiculo):
        self.cliente = cliente
        self.vehiculo = vehiculo

    def realizar_servicio(self):
        raise NotImplementedError(
            "Las subclases deben implementar realizar_servicio()"
        )

    def __str__(self):
        return (
            f"{self.__class__.__name__} "
            f"→ {self.cliente}"
        )


class CambioAceite(ServicioTaller):

    def realizar_servicio(self):
        return (
            f"🛢 Cambio de aceite realizado "
            f"al vehículo {self.vehiculo} "
            f"de {self.cliente}"
        )


class ReparacionMotor(ServicioTaller):

    def realizar_servicio(self):
        return (
            f"🔧 Reparación de motor completada "
            f"para el vehículo {self.vehiculo}"
        )


class PinturaVehiculo(ServicioTaller):

    def realizar_servicio(self):
        return (
            f"🎨 Pintura aplicada al vehículo "
            f"{self.vehiculo}"
        )


class LavadoVehiculo(ServicioTaller):

    def realizar_servicio(self):
        return (
            f"🚿 Lavado completo realizado "
            f"al vehículo {self.vehiculo}"
        )


# Polimorfismo en acción
def ejecutar_servicios(servicios: list):

    for servicio in servicios:
        print(f"  {servicio.realizar_servicio()}")


trabajos = [
    CambioAceite("Carlos Pérez", "Toyota Corolla"),
    ReparacionMotor("Ana López", "Chevrolet Spark"),
    PinturaVehiculo("Luis Gómez", "Kia Sportage"),
    LavadoVehiculo("María Torres", "Hyundai Tucson"),
]

print("Servicios realizados en el taller:")
ejecutar_servicios(trabajos)


# POLIMORFISMO DUCK TYPING

class ImpresoraFactura:

    def generar(self):
        return "Factura generada"

    def guardar(self, datos):
        print(f"Guardando factura: {datos}")


class SistemaInventario:

    def generar(self):
        return "Inventario actualizado"

    def guardar(self, datos):
        print(f"Guardando inventario: {datos}")


class ReporteClientes:

    def generar(self):
        return "Reporte de clientes generado"

    def guardar(self, datos):
        print(f"Guardando reporte: {datos}")


# Funciona con cualquier objeto
# que tenga generar() y guardar()
def procesar_documento(documento):

    contenido = documento.generar()

    print(f"Procesando: {contenido}")

    documento.guardar(
        f"Resultado: {contenido}"
    )


for documento in [
    ImpresoraFactura(),
    SistemaInventario(),
    ReporteClientes()
]:
    procesar_documento(documento)