window.onload = function() {
    const saudacaoElement = document.getElementById("saudacao");
    const agora = new Date();
    const hora = agora.getHours();

    let saudacao;

    if (hora >= 0 && hora < 12) {
        saudacao = "Bom dia, Maciel!";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde, Maciel!";
    } else {
        saudacao = "Boa noite, Maciel!";
    }

    saudacaoElement.textContent = saudacao;

    // Script para abrir/fechar a barra lateral
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('open'); // Alterna entre abrir e fechar a barra lateral
    });
};
// ===============função captura de nome==================
window.onload = function() {
    // Pega o nome armazenado no localStorage
    const nome = localStorage.getItem('nomeUsuario');
    
    // Se o nome não for encontrado (se o usuário tentar acessar diretamente o index.html, por exemplo)
    if (!nome) {
        window.location.href = 'pasta-login/login.html'; // Redireciona para a página de login
        return;
    }

    // Captura o elemento onde será exibida a saudação
    const saudacaoElement = document.getElementById("saudacao");
    const agora = new Date();
    const hora = agora.getHours();

    let saudacao;

    // Define a saudação de acordo com a hora do dia
    if (hora >= 0 && hora < 12) {
        saudacao = `Bom dia, ${nome}!`;
    } else if (hora >= 12 && hora < 18) {
        saudacao = `Boa tarde, ${nome}!`;
    } else {
        saudacao = `Boa noite, ${nome}!`;
    }

    // Atualiza o conteúdo do elemento h2 com a saudação
    saudacaoElement.textContent = saudacao;
};
