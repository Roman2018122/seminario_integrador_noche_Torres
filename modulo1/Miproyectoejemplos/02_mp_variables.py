from types import NoneType

MAX_INTENTOS_CITAS = 3
ANIOS_EXPERIENCIA = 23
NOMBRE_TALLER = "Taller Mecánico Torres"
PRECIO_ACEITE = 15.50
TALLER_ABIERTO = True
PIEZA_FALTANTE = None

print(NOMBRE_TALLER, "tipo", type(NOMBRE_TALLER))
print(ANIOS_EXPERIENCIA, "tipo", type(ANIOS_EXPERIENCIA))
print(PRECIO_ACEITE, "tipo", type(PRECIO_ACEITE))
print(TALLER_ABIERTO, "tipo", type(TALLER_ABIERTO))   
print(PIEZA_FALTANTE, "tipo", type(PIEZA_FALTANTE))

edad_mecanico: int = 23
nombre_cliente: str = "Jonathan Torres"
presupuesto_reparacion: float = 120.75
vehiculo_listo: bool = True
reporte_vacio: NoneType = None

print(nombre_cliente, "tipo", type(nombre_cliente))
print(edad_mecanico, "tipo", type(edad_mecanico))
print(presupuesto_reparacion, "tipo", type(presupuesto_reparacion))
print(vehiculo_listo, "tipo", type(vehiculo_listo))   
print(reporte_vacio, "tipo", type(reporte_vacio))