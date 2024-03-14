function sim() {
    const corpo = document.querySelector(".caicha-boquiçi").style.display = "none"
    const img = document.getElementById("imagi").style.display = "block"
    var audio = new Audio('audo.mp3');
    audio.play();
}

function nao() {
    const corpo = document.querySelector(".caicha-boquiçi").style.display = "none"
    const img = document.getElementById("imagi2").style.display = "block"
    var audio = new Audio('sente.mp3');
    audio.play();
}