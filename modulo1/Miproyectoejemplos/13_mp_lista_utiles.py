print("📋 Manipulación de listas en un taller mecánico")

print("\n🔹 Crear listas")

# Lista vacía de vehículos en espera
vehiculos = []
print("Vehículos:", vehiculos)

# IDs de órdenes de reparación
ordenes = [101, 102, 103, 104]
print("Órdenes:", ordenes)

# Clientes
clientes = ["Juan", "Maria", "Carlos", "Luis"]
print("Clientes:", clientes)

# Lista mixta (datos de una orden)
orden_mixta = [101, "Juan", "Toyota", True, 250.50]
print("Orden mixta:", orden_mixta)

# Lista anidada (vehículo con reparaciones)
historial = [
    "Toyota",
    ["Cambio de aceite", "Filtro"],
    ["Frenos", ["Pastillas", "Discos"]]
]
print("Historial:", historial)


print("\n🔹 Acceso a elementos")

print("Segundo cliente:", clientes[1])
print("Último cliente:", clientes[-1])
print("Clientes intermedios:", clientes[1:3])
print("Clientes invertidos:", clientes[::-1])



print("\n🔹 CRUD en lista de repuestos")

repuestos = ["aceite", "filtro", "bujías", "batería"]
print("Repuestos:", repuestos)

# Crear (insertar)
repuestos.insert(1, "radiador")
print("Insertar radiador:", repuestos)

# Agregar
repuestos.append("llantas")
print("Agregar llantas:", repuestos)

# Extender
repuestos.extend(["alternador", "correa"])
print("Extender lista:", repuestos)

# Modificar
repuestos[0] = "aceite sintético"
print("Modificar:", repuestos)

# Eliminar por valor
repuestos.remove("aceite sintético")
print("Eliminar aceite:", repuestos)

# Eliminar último
eliminado = repuestos.pop()
print("Eliminado:", eliminado)
print("Lista:", repuestos)

# Eliminar por índice
eliminado = repuestos.pop(2)
print("Eliminado índice 2:", eliminado)
print("Lista:", repuestos)

# Eliminar con del
del repuestos[0]
print("Eliminar primero:", repuestos)



print("\n🔹 Ordenar órdenes de reparación")

ordenes_desordenadas = [105, 101, 110, 103, 102]
print("Original:", ordenes_desordenadas)

ordenes_desordenadas.sort()
print("Ordenadas:", ordenes_desordenadas)

ordenes_desordenadas.sort(reverse=True)
print("Descendente:", ordenes_desordenadas)

ordenadas = sorted(ordenes_desordenadas)
print("Nueva lista ordenada:", ordenadas)
print("Original sigue igual:", ordenes_desordenadas)