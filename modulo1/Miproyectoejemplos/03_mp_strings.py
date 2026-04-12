repuestos = "Frenos", "Discos", "Pastillas", "ABS"
print(repuestos)

print("Frenos", "Discos", "Pastillas", "ABS", sep=",")
print("Frenos", "Discos", "Pastillas", "ABS", sep="-")
print("Frenos", "Discos", "Pastillas", "ABS", sep=" ")
print("Frenos", "Discos", "Pastillas", "ABS", end="|")

cliente = "Jonathan Torres"
edad = 23
print(cliente, edad, end="|")
cliente_edad = f"Nombre: {cliente}, Edad: {edad}"
print(cliente_edad)
print(f"Nombre: {cliente}, {edad}")
print(f"Doble de {edad} es {edad * 2}")
print(f"{'Torres':>10}")
pi = 3.14159
print(f"{pi:.2f}")
print(f"{1000000000:,}")