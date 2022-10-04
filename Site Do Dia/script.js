function carregar() { 
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora}hrs`
    if (hora >= 0 && hora < 12) {
        imagem.src = 'imagens/imagem-manhã.jpg'
        document.body.style.background = '#e5f12f'
    } else if (hora >= 12 && hora < 18 ) {
        imagem.src = 'imagens/imagem-tarde.webp'
        document.body.style.background = '#f19d2f'
    } else {
        imagem.src = 'imagens/imagem-noite.jpeg'
        document.body.style.background = '#201f1c'
    }
}