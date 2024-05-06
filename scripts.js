const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function CliqueiNoBotao() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function cliquemascara() {
    form.style.left = "-300px"
    mascara.style.visibility = "hidden"
}

/* 





    form.computedStyleMap.transform = "translateX(-50%)"
    form.computedStyleMap.visibility = "visible"

*/