














#04_imputs


nombre = input("Nombre del cliente? ")
print(f"Hola, {nombre}")
print(f"Hola" + nombre)

kilometros_str = input("kilometraje actual del vehiculo? ")
print(f"Tienes, {kilometros_str} kilometros")
kilometros = int(kilometros_str)
print(f"El doble de tu kilometraje es, {kilometros*2} kilometros ") # type: ignore
print(f"A los:{kilometros*2} cambio de discos de embrague.")