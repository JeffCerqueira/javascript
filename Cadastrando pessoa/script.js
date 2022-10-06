function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (nasc.value.length == 0 || Number(nasc.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img') // uma tag
        img.setAttribute('id', 'foto') // ID com nome foto
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menino.jpeg')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem.webp')
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
        }
    }
}