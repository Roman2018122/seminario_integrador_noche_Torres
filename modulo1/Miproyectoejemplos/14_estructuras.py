print("for, if/elif ")
print("clinica")

def clasificar_imc(imc):
    if imc <18.5:
        return "bajo peso"
    elif imc <24.9:
        return "normal"
    elif imc <30:
        return "sobrepeso"
    else: 
        return "obesidad"
    
obesidad = 0


for i in range(1,5):
    nombre= input("ingrese nombre de paciente: ")
    peso= float(input("ingrese peso del paciente kg: "))
    estatura= float(input("ingrese estatura del paciente m: "))
    imc= peso/estatura**2
    clasif =clasificar_imc(imc)

    print (f"paciente: {nombre}, imc: {imc}, clasificacion: {clasif}")
    if clasif == "obesidad":
        obesidad += 1

print (f"pacientes con obesidad {obesidad}")