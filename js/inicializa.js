onload = inicia(); 
var cont = 5; 

setInterval (inicia,50);

function inicia () {

    cont = cont + 5;

document.getElementById("prog-bar").style.width = cont + "px" ; 

if (cont==400) {

    window.location.replace("../html/login.html");

}


}
