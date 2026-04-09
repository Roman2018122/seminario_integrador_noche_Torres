from types import NoneType


MAX_INTENTOS = 3
EDAD = 23
NOMBRE = "Jonathan Torres"
ALTURA = 1.70
ACTIVO = True
NULO = None

print(NOMBRE, "tipo", type(NOMBRE))
print(EDAD, "tipo", type(EDAD))
print(ALTURA, "tipo", type(ALTURA))
print(ACTIVO, "tipo", type(ACTIVO))   
print(NULO, "tipo", type(NULO))

edad_trabajador: int = 23
nombre_apellido:  str = "Jonathan Torres"
altura: float = 1.70
trabajador_activo: bool = True
trabajador_nulo: NoneType = None

print(nombre_apellido, "tipo", type(nombre_apellido))
print(edad_trabajador, "tipo", type(edad_trabajador))
print(altura, "tipo", type(altura))
print(trabajador_activo, "tipo", type(trabajador_activo))   
print(trabajador_nulo, "tipo", type(trabajador_nulo))
