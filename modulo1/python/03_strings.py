cadena_string = "Hola", "Desde", "La", "UTE"
print(cadena_string)

print("Hola", "Desde", "La", "UTE", sep=",")
print("Hola", "Desde", "La", "UTE", sep="-")
print("Hola", "Desde", "La", "UTE", sep=" ")
print("Hola", "Desde", "La", "UTE", end="|")

nombre = "Maria Ramos"
edad = 29
print(nombre, edad, end= "|")
nombre_edad = f"Nombre: {nombre},  Edad: {edad}"
print(nombre_edad)
print(f"Nombre: {nombre}, {edad}")
print(f"Doble de {edad}es{edad*2}")
print(f"{'Maria':>10}") #Alineado a la derecha
pi= 3.14159
print(f"{pi:.2f}")
print(f"1000000000:,")