// Função para redirecionar o usuário para a página de login e limpar o nome armazenado
function fazerLogout() {
    // Remove o nome do localStorage
    localStorage.removeItem('nomeUsuario');

    // Redireciona para a página de login
    window.location.href = 'login.html'; // Ajuste o caminho conforme necessário
}
