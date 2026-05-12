print("EMPREZA RANKING DE VENDEDORES")



vendedores_estrella = 0
totalventasequipo = 0
for i in range(1,5):
    nombre = input("ingrese nombre del vendedor: ")
    ventas_mes = float(input("ventas total: "))
    totalventasequipo += ventas_mes
    if ventas_mes < 500:
        print(f"Vendedor {nombre} con ventas: {ventas_mes}: NIVEL BAJO!")
    elif ventas_mes < 1500:
        print(f"Vendedor {nombre} con ventas: {ventas_mes}: REGULAR!")
    elif ventas_mes < 3000:
        print(f"Vendedor {nombre} con ventas: {ventas_mes}: BUEN RENDIMIENTO!")
    else:
        print(f"Vendedor {nombre} con ventas: {ventas_mes} VENDEDOR ESTRELLA!")
        vendedores_estrella += 1

print("Total ventas del equipo: ", totalventasequipo)
print("Vendedores estrella: ", vendedores_estrella)
