window.onload = function() {
    // Função para obter o nome do usuário
    const nome = localStorage.getItem('nomeUsuario');
    
    // Se o nome não for encontrado (usuário tenta acessar diretamente a página)
    if (!nome) {
        window.location.href = 'login.html'; // Redireciona para a página de login
        return;
    }

    // Função para definir a saudação com base na hora e exibir em múltiplos elementos
    function definirSaudacaoEExibirNome(nome) {
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

        // Exibir saudação no elemento com id "saudacao"
        const saudacaoElement = document.getElementById("saudacao");
        if (saudacaoElement) {
            saudacaoElement.textContent = saudacao;
        }

        // Exibir nome no elemento com id "pUser" (ou qualquer outro id)
        const pUsuario = document.getElementById("pUser");
        if (pUsuario) {
            pUsuario.textContent = nome;
        }

        // Se houver mais elementos onde o nome precisa ser exibido, faça o mesmo:
        const outroElemento = document.getElementById("outroElementoId");
        if (outroElemento) {
            outroElemento.textContent = nome;
        }
    }

    // Chama a função para exibir a saudação e o nome nos lugares desejados
    definirSaudacaoEExibirNome(nome);

    // Script para abrir/fechar a barra lateral
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('open'); // Alterna entre abrir e fechar a barra lateral
        });
    }
};
