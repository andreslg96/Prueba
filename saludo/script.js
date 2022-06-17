console.log("Se nota que todavía me extrañas.")

setInterval(cambiarSaludo,2000);

/**
 * Cambia la frase en el título h2
 */
function cambiarSaludo(){
    let frase = document.getElementsByTagName("h2")[1].innerHTML;
    
    //console.log("Me parece una falta de respeto");
    //Estoy asignando a una variable el valor de h2
    if(document.getElementsByTagName("h2")[1].innerHTML =="Ganando como siempre"){
        document.getElementsByTagName("h2")[1].innerHTML = "Impongo moda para las niñas!"
    }
    else{
        document.getElementsByTagName("h2")[1].innerHTML="Ganando como siempre"
    }
    console.log("frase: "+frase)
 
}