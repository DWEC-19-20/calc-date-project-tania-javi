/* EVENTOS
*/





/* OPERACIONES
*/

const MILSEGPORDIA = 86400000;

/* Función que pasa los valores de las fechas de String a entero
*/

function stringAEnt(fecha) {
  var year = parseInt(fecha.substring(0, 4));
  var month = parseInt(fecha.substring(5, 7));
  var day = parseInt(fecha.substring(8, 10));
  return new Date(year, month, day);
}

/* Función que suma o resta un número de dias naturales según el valor de operation 
   startdate: objeto Fecha 
   days: número de días naturales
   return el resultado como un string en formato dd/mm/YYYY
*/
function calcDate(startdate, days) {
  return new Date().toLocaleDateString("es-ES");
}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días naturales que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días naturales entre las dos fechas
*/
function getDays(startdate, endDate) {

  var entrada = stringAEnt(startdate);
  var salida = stringAEnt(endDate);
  var dias = Math.round((salida.getDate() - entrada.getDate()) / MILSEGPORDIA);

  return dias;
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



