let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-Info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")

// ligar o som
botaoSom.addEventListener("click", ligaSom)

function ligaSom() {
    video.muted = !video.muted
}

// mostrar modal
botao.addEventListener("click", mostraModal)
modal.addEventListener("click", esconderModal)

function mostraModal() {
    modal.style.display = "block"
}

function esconderModal() {
    modal.style.display = "none"
}

// tocar tundum

window.addEventListener("load", tocarTundum)

function tocarTundum() {
    audio.play()
}