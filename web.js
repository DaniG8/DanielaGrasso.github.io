//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
     var habilidades=document.getElementById("habilidades");
     var distancia_habilidades=window.innerHeight  - habilidades.getBoundingClientRect().top;
     if(distancia_habilidades >=300){
        let habilidades=document.getElementsByClassName("progreso")
        habilidades[0].classList.add("Photoshop");
        habilidades[1].classList.add("Illustrator");
        habilidades[2].classList.add("InDesign");
        habilidades[3].classList.add("AfterEffects");
        habilidades[4].classList.add("HTML-CSS");
        habilidades[5].classList.add("Comunicacion");
        habilidades[6].classList.add("Creatividad");
        habilidades[7].classList.add("Versatibilidad");
        habilidades[8].classList.add("TrabajoenEquipo");
        habilidades[9].classList.add("Dedicacion");
     }
}
// scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
