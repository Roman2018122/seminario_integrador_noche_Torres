print("match - case")
comando= input("comando iniciar/parar/reiniciar")
match comando:
    case "iniciar":
        print("Sistema iniciando...")
    case "parar":
        print("Sistema deteniendose...")
    case "reiniciar":
        print("sistema reiniciando...")
    case _:
        print(f"comando {comando} no valido")
        
print("match - con condiciones")
numero = int(input("incluya numero"))
match numero:
    case n if n<0:
        print(f"{n}es negativo")
    case 0:
        print("Es cero")
    case n if n %2 == 0:
        print(f"el numero{n} es positivo y par ")
    case n:
        print(f"el numero {n} es positivo y par")