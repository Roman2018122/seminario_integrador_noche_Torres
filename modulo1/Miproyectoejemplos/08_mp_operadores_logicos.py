print("condicional if")
print("if simple")
stock=3
if stock >0:
    print("Producto disponible")
    print("if else - dos caminos")
    saldo=25
    if saldo >=50:
        print("compra permitida")
    else:
        print("saldo insuficiente")


    print("if multiples condiciones")
    temperatura_motor=32
    if temperatura_motor <10:
        print("motor apagado por baja temperatura")
    elif temperatura_motor>55:
        print("motor con temperatura normal")
        
    else:
        print("hace calor")

        
    print("if condiciones anidadas")
    licencia= True
    licencia_vigente=False
    if licencia:
        if licencia_vigente:
            print("licencia valida")
        else: 
            print("licencia no vigente")
    else:
        print("sin licencia")
        
        
    print("if con operadores logicos")
    documento= True
    pago = True
    if documento and pago:
        print("inscripcion confirmada")
    es_vip= False
    tiene_invitacion= True
    if es_vip or tiene_invitacion:
        print("Puede entrar al evento")
        
    bloqueado= False
    if not bloqueado:
        print("Usuario habilitado")