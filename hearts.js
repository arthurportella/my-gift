function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.innerHTML = "❤️";
    document.body.appendChild(coracao);

    // Define tamanho aleatório do coração
    const tamanho = Math.random() * 20 + 10; // Entre 10px e 30px
    coracao.style.fontSize = `${tamanho}px`;

    // Define posição aleatória no topo da tela
    coracao.style.left = Math.random() * window.innerWidth + "px";

    // Define animação aleatória de duração entre 3 e 5 segundos
    coracao.style.animationDuration = Math.random() * 3 + 2 + "s";

    // Remove o coração após a animação
    setTimeout(() => {
        coracao.remove();
    }, 5000);
}

// Criar corações a cada 300ms
setInterval(criarCoracao, 300);
