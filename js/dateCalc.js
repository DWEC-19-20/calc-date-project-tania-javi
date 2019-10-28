/* EVENTOS
*/





/* OPERACIONES
*/

const MILSEGPORDIA = 86400000;
const ARRAYFESTIVOS = [new Date('2019/01/01'), new Date('2019/01/06'), new Date('2019/04/01'), new Date('2019/07/15'), new Date('2019/07/12'), new Date('2019/10/01'), new Date('2019/11/06'), new Date('2019/11/08'), new Date('2019/11/25')];
const festivo = false;
var contFest = 0;
var contFines = 0;
/* Función que pasa los valores de las fechas de String a entero
*/


/* Función que suma o resta un número de dias hábiles según el valor de operation 
   startdate: objeto Fecha 
   days: número de días hábiles
   return el resultado como un string en formato dd/mm/YYYY
*/

function esFestivo(startdate) {
  var entrada = startdate.getMonth();
  var entrada2 = startdate.getDate();
  for ($i = 0; $i < ARRAYFESTIVOS.length; $i++) {
    var diaFesti = ARRAYFESTIVOS[$i].getMonth();
    var diaFesti2 = ARRAYFESTIVOS[$i].getDate();
    if ((entrada == diaFesti) && (entrada2 == diaFesti2)) {
      festivo = true;
    }
  }
  return festivo;
}

function calcWorkingDate(startdate, days) {
  var diasFinal = days;
  for (let i = 0; i < days; i++) {
    esFestivo(startdate);
    if (festivo == true) {
      contFest++;
    }

    var entrada2 = startdate.getDay();
    if (entrada2 == 0 || entrada2 == 6) {
      contFines++;
    }
    entrada = startdate.getTime();
    var fechaFinal = entrada +  MILSEGPORDIA; 
  }

  diasFinal = diasFinal - contFines;
  diasFinal= diasFinal -contFines;
  return new Date().toLocaleDateString("es-ES");
}
/*
var entrada = startdate.getTime();
var dias = days * MILSEGPORDIA;
var fechaFinal = entrada + dias;
*/
return new Date(fechaFinal).toLocaleDateString("es-ES");
/* Función que recibe dos fechas de tipo Date y devuelva el el número de días hábiles que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días hábiles entre las dos fechas*/
function getWorkingDays(startdate, endDate) {
  return 0;
}



function stringAEnt(fecha) {
  fecha = document.getElementById("fecha").value;
  var fechaSalida = new Date(fecha);

  return fechaSalida;
}

/* Función que devuelve el valor del input radio para seleccionar 
   una suma o una resta
*/

function valorRadio() {

}

/* Función que suma o resta un número de dias naturales según el valor de operation 
   startdate: objeto Fecha 
   days: número de días naturales
   return el resultado como un string en formato dd/mm/YYYY
*/
/* usar setDate y getDate*/
function calcDate(startdate, days) {

  var entrada = startdate.getTime();
  var dias = days * MILSEGPORDIA;
  var fechaFinal = entrada + dias;

  return new Date(fechaFinal).toLocaleDateString("es-ES");
}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días naturales que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días naturales entre las dos fechas
*/
function getDays(startdate, endDate) {

  var entrada = startdate.getTime();
  var salida = endDate.getTime();
  var totalDias;


  totalDias = Math.round((salida - entrada) / MILSEGPORDIA);

  return totalDias;
}


