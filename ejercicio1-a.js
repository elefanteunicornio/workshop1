// Ejercicio 1.a.i

const sueldo = prompt("Por favor ingrese su sueldo");
alert("Su sueldo es: " + sueldo);

const antiguedad = prompt("Por favor ingrese su antiguedad");
alert("Su antiguedad en la empresa es: " + antiguedad);

const sueldoInferior2000 = Number(sueldo) < 2000;
const antiguedadSuperior10 = Number(antiguedad) >= 10;

const resultado1 = sueldoInferior2000 && antiguedadSuperior10

console.log("el sueldo es inferior a 2000 y la antiguedad igual o mayor a 10 " + resultado1);

// Ejercicio 1.a.ii

const antiguedadMenor10 = Number(antiguedad) < 10;

const resultado2 = sueldoInferior2000 || antiguedadMenor10;

console.log("el sueldo es inferior a 2000 o la antiguedad menor a 10 " + resultado2);

// Ejercicio 1.a.iii

const sueldoMayorIgual2000 = Number(sueldo) >= 2000;

console.log("el sueldo es mayor o igual a 2000" + sueldoMayorIgual2000);
