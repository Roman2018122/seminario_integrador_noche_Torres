tipo_usuario=(input("ingrese tipo de usuario (gratis/premium)"))
pagado = (input("si o no"))
if tipo_usuario == "premium":
    if pagado == "si":
        print("Acceso completo")
    else:
        print("debe pagar")
        
else:
    print("acceso  limitado")
        