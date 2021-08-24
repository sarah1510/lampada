"use strict"

function lampadaQuebrada () {
    return document.getElementById("lampada").src.indexOf("quebrada") !== -1
}

function ligarLampada () {
    const lampada = document.getElementById("lampada")
    const ligar = document.getElementById("ligar")
    const desligar = document.getElementById("desligar")

    if (!lampadaQuebrada()){
        lampada.src = "img/ligada.jpg"
        ligar.disabled = true
        desligar.disabled = false
    }

    
}

function desligarLampada () {
    const lampada = document.getElementById("lampada")
    const ligar = document.getElementById("ligar")
    const desligar = document.getElementById("desligar")


    if (!lampadaQuebrada()){
        lampada.src = "img/desligada.jpg"
        ligar.disabled = false
        desligar.disabled = true
    }


    
}

function quebrarLampada () {
    const lampada = document.getElementById("lampada")
    const ligar = document.getElementById("ligar")
    const desligar = document.getElementById("desligar")


    lampada.src = "img/quebrada.jpg"
    ligar.disabled = true
    desligar.disabled = true
}


// Eventos
document.getElementById("ligar").addEventListener("click", ligarLampada)
document.getElementById("desligar").addEventListener("click", desligarLampada)
document.getElementById("lampada").addEventListener("dblclick", quebrarLampada)
document.getElementById("lampada").addEventListener("mouseover", ligarLampada)
document.getElementById("lampada").addEventListener("mouseleave", desligarLampada)
