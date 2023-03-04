



//funcion que muestra el menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

//detector de scrolling para aplicar la animacion de la barra de habilidades

window.onscroll = function (){
    efectoHabilidades()
}

//funcion para aplicar animacion en las barras de habilidades

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("barra.progreso1")
        document.getElementById("bd").classList.add("barra.progreso2")
        document.getElementById("ps").classList.add("barra.progreso3")
        document.getElementById("LC++").classList.add("barra.progreso4")
    }
}