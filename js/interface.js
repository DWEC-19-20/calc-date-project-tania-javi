var ventana;
var config = "resizable=no, width=800, height=600,scrollbars=yes,left=300, top=100";

function abrir_Popup() {
  ventana = window.open("indexEmerge.html", "CALCULA_DÍAS", config);
}                    

function abrirAgregar(pesta){
    var dentroPesta;
    dentroPesta=document.getElementById('Sumar');
    dentroPesta.style.display=none;
}

function abrirAgregar(pesta){
    var dentroPesta;
    dentroPesta=document.getElementById('Restar');
    
    dentroPesta.style.display=none;
}
