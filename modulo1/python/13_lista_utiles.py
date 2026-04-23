print("manipulacion de listas")
print("crear listas")

vacia = []
print(vacia)

numeros = [1,2,3,4,5,6]
print(numeros)

nombres = ["Juan","Juana","Jose","yamil"]
print(nombres)

mixta = [1,3, "Hello", True, "World", None,3.14]
print(mixta)

anidada = [1, 2, [3,4], 5, [4,4,[1,2,3]]]
print(anidada)

print("Acceso a los elementos de una lista")
print(nombres[1])
print(nombres[-1])
print(nombres[1:3])
print(nombres[::-1])

print("CRUD")
frutas = ["naranja", "melon", "banana", "mora"]

frutas.insert(1,"pera")
print(frutas)

frutas.append("papaya")
print(frutas)

frutas.extend(["kiwi", "mango"])

# Modificar
frutas[0] = "toronja"
print(frutas)

# Eliminar elementos
frutas.remove("toronja")
print(frutas)

eliminando = frutas.pop()
print(eliminando)
print(frutas)

eliminando = frutas.pop(2)
print(eliminando)
print(frutas)

del frutas[0]
print(frutas)

print("Buscar valores en los elementos de una lista ")
numeros_desordenados=[3,2,9,5,4,1]
print(numeros_desordenados)
numeros_desordenados.sort()
print(numeros_desordenados)
numeros_desordenados.sort(reverse= True)
print(numeros_desordenados)

ordenada=sorted(numeros_desordenados)
print(ordenada)
print(numeros_desordenados)
