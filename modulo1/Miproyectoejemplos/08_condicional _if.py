print("Condicionales en un Taller Mecánico")

print("If simple")

repuestos_disponibles = 3

if repuestos_disponibles > 0:
    print("Repuestos disponibles en el taller")

    print("If else - dos caminos")

    presupuesto_cliente = 25

    if presupuesto_cliente >= 50:
        print("Reparación autorizada")
    else:
        print("Presupuesto insuficiente para la reparación")

    print("If múltiples condiciones")

    temperatura_motor = 32

    if temperatura_motor < 10:
        print("Motor demasiado frío")

    elif temperatura_motor < 25:
        print("Motor en temperatura estable")

    else:
        print("Motor caliente")

    print("If con condiciones anidadas")

    conexion_scanner = True
    scanner_autorizado = False

    if conexion_scanner:

        if scanner_autorizado:
            print("Acceso al sistema de diagnóstico")

        else:
            print("Scanner no autorizado")

    else:
        print("Sin conexión al sistema")

    print("If con operadores lógicos")

    pago_realizado = True
    repuesto_instalado = True

    if pago_realizado and repuesto_instalado:
        print("Entrega del vehículo confirmada")

    cliente_vip = False
    tiene_cupon = True

    if cliente_vip or tiene_cupon:
        print("Cliente con descuento especial")

    vehiculo_bloqueado = False

    if not vehiculo_bloqueado:
        print("Vehículo habilitado para salir del taller")