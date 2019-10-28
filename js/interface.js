var ventana;
var config = "resizable=no, width=800, height=800,scrollbars=yes,left=300, top=100";

function abrir_Popup() {
  ventana = window.open("indexEmerge.html", "CALCULA_DÍAS", config);
}   

function abrirPesta(evt, pesta) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(pesta).style.display = "block";
  evt.currentTarget.className += " active";
}

// EVENTOS
// Evento del botón para calcular la suma o resta de días

document.getElementById("calcularSuma").addEventListener("click", function (e) {

  var fecha = new Date(document.getElementById("fecha").value);
  var days = document.getElementById("days").value;

  if (document.getElementById("naturalSuma").checked == true) {
    document.getElementById("resulSuma").innerHTML = calcDate(fecha,days);
  } else {
    document.getElementById("resulSuma").innerHTML = calcWorkingDate(fecha, days);
  }

  document.getElementById("divSuma").style.display = "contents";
  document.getElementById("divRango").style.display = "none";
});

//Evento del botón para calcular la diferencia de días entre dos fechas

document.getElementById("calcularRango").addEventListener("click", function (e) {

  var startDate = new Date(document.getElementById("startDate").value);
  var endDate = new Date(document.getElementById("endDate").value);

  if (document.getElementById("naturalRango").checked == true) {
    document.getElementById("resulRango").innerHTML = getDays(startDate,endDate);
  } else {
    document.getElementById("resulRango").innerHTML = getWorkingDays(startDate, endDate);
  }
  
  document.getElementById("divRango").style.display = "contents";
  document.getElementById("divSuma").style.display = "none";
});