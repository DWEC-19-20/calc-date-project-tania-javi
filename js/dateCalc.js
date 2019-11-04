/* OPERACIONES
*/

const MILSEGPORDIA = 86400000;

const ARRAYFESTIVOS = [new Date('2019-01-01'), new Date('2019-01-06'), new Date('2019-05-01'), new Date('2019-08-15'), new Date('2019-10-12'), new Date('2019-11-01'), new Date('2019-12-06'), new Date('2019-12-08'), new Date('2019-12-25')];

/* Función que comprueba que días son festivos*/
function esFestivo(startdate) {
  var festivo=false;
  var entrada = startdate.getMonth();
  var entrada2 = startdate.getDate();
  for ($i = 0; $i < ARRAYFESTIVOS.length; $i++) {
    var diaFesti = ARRAYFESTIVOS[$i].getMonth();
    var diaFesti2 = ARRAYFESTIVOS[$i].getDate();
    if ((entrada == diaFesti) && (entrada2 == diaFesti2)) {
      festivo = true;
      break;
    }
  }
  return festivo;
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
  if(days > 0) {
    for (let i=0; i<days; i++) {
      startdate = new Date(startdate.getTime()+MILSEGPORDIA);
      if (startdate.getDay() == 6 || startdate.getDay() == 0) {
        i--;
      } else {
        if (esFestivo(startdate)==true) {
          i--;
        }
      }
    }
  } else {
    for (let i=0; i>days; i--) {
      startdate = new Date(startdate.getTime()-MILSEGPORDIA);
      if (startdate.getDay() == 6 || startdate.getDay() == 0) {
        i++;
      } else {
        if (esFestivo(startdate)==true) {
          i++;
        }
      }
    }
  }
  

  return new Date(startdate).toLocaleDateString("es-ES");
}

/* Función que recibe dos fechas de tipo Date y devuelva el el número de días hábiles que hay entre
  las dos fechas.
  startdate: objeto Fecha inicio
  endDate: objeto Fecha inicio
  return número de días hábiles entre las dos fechas*/
function getWorkingDays(startdate, endDate) {
  var diasNaturales = getDays(startdate, endDate);
  var diasHabiles = 0;

  if (diasNaturales>0) {
    for (let i = 0; i<diasNaturales; i++) {
      startdate = new Date(startdate.getTime()+MILSEGPORDIA);
      if (startdate.getDay() == 6 || startdate.getDay()==0) {
        diasHabiles--;
      } else {
        if (esFestivo(startdate)==true) {
          diasHabiles--;
        }
      }
      diasHabiles++;
    }
  } else {
    for (let i = 0; i>diasNaturales; i--) {
      startdate = new Date(startdate.getTime()-MILSEGPORDIA);
      if (startdate.getDay() == 6 || startdate.getDay()==0) {
        diasHabiles++;
      } else {
        if (esFestivo(startdate)==true) {
          diasHabiles++;
        }
      }
      diasHabiles--;
    }
  }

  return diasHabiles;
}



