const dias = ["domingo"
    ,"lunes"
    ,"martes"
    ,"miercoles"
    ,"jueves"
    ,"viernes"
    ,"sabado"];

const nacimiento = new Date(1980, 6, 2);
const hoy = new Date();
const tiempomil = hoy - nacimiento;
const tiemposeg = tiempomil /1000;
const tiempomin = tiemposeg / 60;
const tiempohor = tiempomin / 60;
const tiempodias = tiempohor / 24;
const tiempoyear = tiempodias / 365;
const proximo = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());
console.log(`tiempo en milisegundos: ${tiempomil}`);
console.log(`tiempo en segundos: ${tiemposeg}`);
console.log(`tiempo en minutos: ${tiempomin}`);
console.log(`tiempo en horas: ${tiempohor}`);
console.log(`tiempo en dias: ${tiempodias}`);
console.log(`tiempo en year: ${tiempoyear}`);
console.log(dias[proximo.getDay()]);