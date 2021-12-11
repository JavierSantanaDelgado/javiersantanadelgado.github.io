const typed = new Typed('.typed',{
    strings: [
        '<i class ="caracteristicas">Creativo.</i>', 
        '<i class ="caracteristicas">Proactivo.</i>',
        '<i class ="caracteristicas">Independiente.</i>',
        '<i class ="caracteristicas">Responsable.</i>',
        '<i class ="caracteristicas">Sincero.</i>',
        '<i class ="caracteristicas">Puntual.</i>',
        '<i class ="caracteristicas">Humilde.</i>'
    ],
    typeSpeed:55,
    startDelay:300,
    backSpeed:65,
    loop:true,
});
function cambiarLenguajes(boton){
    var botonIniciador = boton.textContent
    var primerC = document.getElementById("primerC")
    var segundoC = document.getElementById("segundoC")
    var tercerC = document.getElementById("tercerC")
    var cuartoC = document.getElementById("cuartoC")

    var barra1 = document.getElementById("progreso1")
    var barra2 = document.getElementById("progreso2")
    var barra3 = document.getElementById("progreso3")
    var barra4 = document.getElementById("progreso4")

    var eBarra3 = document.getElementById("terceraBarra")
    var eBarra4 = document.getElementById("cuartaBarra")
 
    switch(botonIniciador){
        case("Lenguajes"):
            primerC.textContent =  "Java"
            segundoC.textContent = "C"
            tercerC.textContent =  "C #"
            cuartoC.textContent = "Python"

            barra1.style = "width: 85%"
            barra1.textContent="85%"
            barra1.ariaValueNow="85"

            barra2.style = "width: 55%"
            barra2.textContent="55%"
            barra2.ariaValueNow="55"

            barra3.style = "width: 75%"
            barra3.textContent="75%"
            barra3.ariaValueNow="75"

            barra4.style = "width: 65%"
            barra4.textContent="65%"
            barra4.ariaValueNow="65"

            barra1.style.backgroundColor = "#ff7806"
            barra2.style.backgroundColor = "#0049ff"
            barra3.style.backgroundColor = "#651f78"
            barra4.style.backgroundColor = "#09b209"

            tercerC.style.display =  "flex"
            cuartoC.style.display =  "flex"
            eBarra3.style.display="flex"
            eBarra4.style.display="flex"
            
            break;
        case("Web"):
            primerC.textContent =  "HTML"
            segundoC.textContent = "CSS"
            tercerC.textContent =  "JavaScript"
            cuartoC.textContent = "BootStrap"

            barra1.style = "width: 75%"
            barra1.textContent="75%"
            barra1.ariaValueNow="75"

            barra2.style = "width: 75%"
            barra2.textContent="75%"
            barra2.ariaValueNow="75"

            barra3.style = "width: 65%"
            barra3.textContent="65%"
            barra3.ariaValueNow="65"

            barra4.style = "width: 55%"
            barra4.textContent="55%"
            barra4.ariaValueNow="55"

            barra1.style.backgroundColor = "#ef652a"
            barra2.style.backgroundColor = "#31a4d5"
            barra3.style.backgroundColor = "#dac414"
            barra4.style.backgroundColor = "#7811f2"

            tercerC.style.display =  "flex"
            cuartoC.style.display =  "flex"
            eBarra3.style.display="flex"
            eBarra4.style.display="flex"
        break
        case("Idiomas"):
            primerC.textContent =  "Español"
            segundoC.textContent = "Inglés"
            tercerC.textContent =  "Francés"
            cuartoC.textContent = "Japonés"

            barra1.textContent="Nativo"
            barra1.style = "width: 100%"
            barra1.ariaValueNow="100"

            barra2.style = "width: 75%"
            barra2.textContent="B1"
            barra2.ariaValueNow="75"

            barra3.style= "width: 25%"
            barra3.textContent="A1"
            barra3.ariaValueNow="25"

            barra1.style.backgroundColor = "#c00b1d"
            barra2.style.backgroundColor = "#090f67"
            barra3.style.backgroundColor = "#002551"
            barra4.style.backgroundColor = "#7811f2"

            barra4.style= "width: 100%"
            barra4.textContent="Intención de comenzar a aprender"
            barra4.style.color="black"
            barra4.style.backgroundColor="#e9ecef";
            barra4.ariaValueNow="100"

        break;

        
    }



}