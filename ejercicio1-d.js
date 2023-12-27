// Ejercicio 1.d

const nombreEmpleado = String(prompt("Escriba el nombre del empleado:"));
const salarioEmpleadoHoras = Number(
  prompt("Escriba el salario del empleado por hora:")
);
const horasTrabajadas = Number(
  prompt("Escriba las horas que trabajo el empleado:")
);

// pundo i.

const salarioBasicoMensual = salarioEmpleadoHoras * horasTrabajadas;

// punto ii.

//if (salarioBasicoMensual <= 700000) {
//  console.log("recibe subsidio.");
//} else {
//  console.log("no recibe subsidio");
//}

const recibeSubsidio = salarioBasicoMensual <= 700000;

// punto iii.

console.log(
  "El nombre del empleado es: " +
    nombreEmpleado +
    ". Su salario basico mensual es: " +
    salarioBasicoMensual +
    ". El empleado recibe subsidio? " +
    recibeSubsidio
);
