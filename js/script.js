document.getElementById('botaoMensagem').addEventListener('click', function() {
    var mensagens = [
        "Você consegue! Continue estudando!",
        "Cada dia é uma nova oportunidade para aprender!",
        "Persistência é o caminho do sucesso!",
        "Acredite no seu potencial!",
        "1% por dia",
        "Grandes programadores começaram exatamente onde você está agora!",
        "Se quebrou, vai voltar mais forte",
        "Compre uma lasanha de 600cv"
    ];
    
    var mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    
    document.getElementById('mensagem').innerText = mensagemAleatoria;
});