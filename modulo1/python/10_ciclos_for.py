print("Ciclo for")
print("for basico")

for i in range(1,6):
    print(i)

autos=["camionetas","deportivas","sedanes"]
for auto in autos:
    print(auto)


print("control de interrupción")
for i in range(1,10):
    if i==3: continue
    if i==7: break
    print(i)
else:
    print("Terminado el ciclo")

print("for con range step")
for i in range(0,10,2):
    print(i)


print("for con range regresivo")
for i in range(10,0,-1):
    print(i)


print("for con enumerate")
marcas=["bmw","audi","mazda","mercedes"]
for indice, nombre in enumerate(marcas):
    print(indice, nombre)


print("for con zip")
edades=[18,11,25,56]
for marca, edad in zip(marcas, edades):
    print(marca, edad)
    
    
print("for anidados ")
for i in range (1,4):
    for x in range (1,4):
        print(i,x)
        
            
cantidad =  int(input("ingrese cantidad de repuestos "))
suma = 0
for i in range (1, cantidad +1):
    repuesto = float(input(f"repuesto {i}:"))
    suma+= repuesto
promedio= suma/cantidad
print("costo promedio: ", promedio)
if promedio >=7:
    print("descento del 10%")
else: 
    print("no hay descuento")