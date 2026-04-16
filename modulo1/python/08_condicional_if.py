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
    temperatura=32
    if temperatura <10:
        print("hace frio")
    elif temperatura<25:
        print("clima templado")
        
    else:
        print("hace calor")
        
    print("if condiciones anidadas")
    conexion= True
    token_valido=False
    if conexion:
        if token_valido:
            print("acceso a la api")
        else: 
            print("token invalido")
    else:
        print("sin conexion")
        
        
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