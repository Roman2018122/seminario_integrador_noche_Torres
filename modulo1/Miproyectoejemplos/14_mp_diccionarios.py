print("Diccionarios")
print("Sistema de Taller Mecánico")

# Crear diccionarios
vacio = {}

vehiculo = {
    "cliente": "Carlos",
    "modelo": "Toyota Corolla",
    "placa": "ABC-123",
    "kilometraje": 85000
}

taller = dict(nombre="AutoFix", ciudad="Quito")

# Acceso a datos
print("Cliente:", vehiculo["cliente"])

# Modificar datos
vehiculo["cliente"] = "José"
print(vehiculo)

# Eliminar un dato
del vehiculo["kilometraje"]
print(vehiculo)

# Verificar existencia
print("cliente" in vehiculo)
print("placa" in vehiculo)

# Métodos esenciales
print(vehiculo.keys())
print(vehiculo.values())
print(vehiculo.items())

# Iterar diccionario
for clave, valor in vehiculo.items():
    print(f"Clave: {clave}, Valor: {valor}")