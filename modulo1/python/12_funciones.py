print("funciones en python")
print("funcion basica")
def saludar():
    print("Hola desde la UTE")
    
saludar()
print("funcion con parametro")
def saludarConNombre(nombre):
    print(f"Hola: {nombre}, que tal?")
    
saludarConNombre("Roman")
saludarConNombre("Jonathan")

print("funcion que devuelve valor con return")
def sumar(a, b):
    return a + b
print (sumar(5,4))

print("funcion por posiciuon y por nombre")
def presentar(nombre, edad, ciudad):
    print(f"señor(a): {nombre}, edad: {edad}, ciudad: {ciudad}")
presentar("maria", 26, "Quito")
presentar("Roman", 23, "Quito")
presentar(ciudad=40, edad= 55, nombre="pedro")


print("funcion con valores de parametros por defecto")
def saludo_con_valores(nombre, saludo= "Hola", puntuacion="!"):
    presentar(saludo,  nombre, puntuacion)
saludo_con_valores("pedro",  "buenas noches", "...")
saludo_con_valores("juan", puntuacion="...")
saludo_con_valores("carlos", "Buenas tardes")

print("funcion con parametros posicionales")
def sumar_todos(*args):
    print(f"parametros recibidos {args}")
    return sum(args)
print(sumar_todos(1,2,3))
print(sumar_todos(1,2,3,4,5,6,7))
print(sumar_todos(10,20,30))

print("funcion con parametros combinados con posicionales")
def mostrar_info(titulo, *datos):
    print(f"parametros recibidos {datos}, {titulo}")
    print(titulo)
    for dato in datos:
        print(f"-{dato}")
mostrar_info("Frutas", "Naranja", "pera", "manzana")