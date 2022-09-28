var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora}hrs`)
if (hora > 4 && hora < 12) {
    console.log('Bom dia')
} else if (hora > 12 && hora < 17) {
    console.log('Boa tarde')
} else if (hora < 5) {
    console.log('Boa madrugada')
} else {
    console.log('Boa noite')
}
