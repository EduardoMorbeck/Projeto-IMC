function verificar(){
    var peso = document.getElementById('peso')
    var altura = document.getElementById('altura')
    var resultado = document.getElementById('resultado')
    var pes = Number(peso.value)
    var alt = Number(alt.value)
    var imc = pes+alt
    resultado.innerHTML =`Seu imc é ${imc}`
    
}