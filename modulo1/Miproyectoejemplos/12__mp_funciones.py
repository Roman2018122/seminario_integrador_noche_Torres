print("Funciones en Python - Sistema de Taller Mecánico")

print("Función básica")

def iniciar_taller():
    print("El taller mecánico está abierto")

iniciar_taller()


print("Función con parámetro")

def recibir_cliente(nombre):
    print(
        f"Bienvenido {nombre}, "
        f"su vehículo será diagnosticado"
    )

recibir_cliente("Roman")


print("Función que devuelve valor con return")

def calcular_factura(
    mano_obra,
    repuestos
):
    return mano_obra + repuestos

print(calcular_factura(120, 80))


print("Función por posición y por nombre")

def registrar_vehiculo(
    cliente,
    vehiculo,
    placa
):
    print(
        f"Cliente: {cliente}, "
        f"Vehículo: {vehiculo}, "
        f"Placa: {placa}"
    )

registrar_vehiculo(
    "Roman",
    "Toyota Corolla",
    "ABC-123"
)

registrar_vehiculo(
    placa="XYZ-999",
    vehiculo="Chevrolet Spark",
    cliente="Pedro"
)


print("Función con valores por defecto")

def mensaje_revision(
    cliente,
    saludo="Hola",
    estado="Vehículo en revisión"
):
    print(f"{saludo} {cliente} - {estado}")

mensaje_revision(
    "Carlos",
    "Buenas tardes",
    "Vehículo listo"
)

mensaje_revision(
    "Juan",
    estado="Pendiente de repuestos"
)

mensaje_revision(
    "Ana",
    "Buenos días"
)


print("Función con parámetros posicionales")

def sumar_costos(*args):

    print(f"Costos recibidos: {args}")

    return sum(args)

print(sumar_costos(50, 60, 70))

print(sumar_costos(
    100, 200, 300, 400
))

print(sumar_costos(25, 35))


print(
    "Función con parámetros combinados "
    "y posicionales"
)

def mostrar_reparaciones(
    titulo,
    *datos
):

    print(
        f"Reparaciones registradas: "
        f"{datos}, {titulo}"
    )

    print(titulo)

    for dato in datos:
        print(f"- {dato}")

mostrar_reparaciones(
    "Servicios realizados",
    "Cambio de aceite",
    "Alineación",
    "Balanceo",
    "Cambio de frenos"
)