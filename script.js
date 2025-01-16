let menuVisible = false
//Funcion que oculta o muestra el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="responsive";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList="";
    menuVisible=false;
}
//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("habilidades")
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("sql");
        habilidades[3].classList.add("git");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("python");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajoequipo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("responsabilidad");
        habilidades[10].classList.add("honestidad");
        habilidades[11].classList.add("compromiso");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades

window.onscroll = function(){
    efectoHabilidades();
}

// Asegúrate de que el menú esté oculto al inicio
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("nav").classList.remove("responsive"); // Asegura que el menú no se muestre al inicio
    menuVisible = false;
});