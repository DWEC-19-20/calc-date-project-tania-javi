/* EVENTOS
*/





/* OPERACIONES
*/

const MILSEGPORDIA = 86400000;

/* Función que pasa los valores de las fechas de String a entero
*/

function stringAEnt(fecha) {
  fecha = document.getElementById("fecha").value;
  var fechaSalida= new Date(fecha);

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

/* Función que suma o resta un número de dias hábiles según el valor de operation 
   startdate: objeto Fecha 
   days: número de días hábiles
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcWorkingDate(startdate, days) {
  return new Date().toLocaleDateString("es-ES");
}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días hábiles que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días hábiles entre las dos fechas*/
function getWorkingDays(startdate, endDate) {
  return 0;
}



