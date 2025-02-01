localStorage.setItem('nomeUsuario', nome);  // Exemplo de como o nome foi salvo

// Quando a página carregar
window.onload = function() {
    // Pega o nome armazenado no localStorage
    const nome = localStorage.getItem('nomeUsuario');
    
    // Verifica se o nome existe no localStorage
    if (nome) {
        // Seleciona o elemento com o id "pUser"
        const pUsuario = document.getElementById("pUser");

        // Atualiza o conteúdo do elemento para exibir o nome
        pUsuario.textContent = nome;
    } else {
        // Caso não tenha nome armazenado, pode exibir uma mensagem padrão ou redirecionar
        console.log('Nome de usuário não encontrado.');
    }
};
