// Função para alterar a saudação com base no horário
function atualizarSaudacao() {
    const saudacaoElement = document.getElementById('saudacao'); // Seleciona o elemento h1
    const agora = new Date(); // Pega a data e hora atuais
    const horas = agora.getHours(); // Pega somente a hora atual
    
    let saudacao;

    if (horas >= 0 && horas < 12) {
        saudacao = "Bom dia"; // Período da manhã
    } else if (horas >= 12 && horas < 18) {
        saudacao = "Boa tarde"; // Período da tarde
    } else {
        saudacao = "Boa noite"; // Período da noite
    }

    // Atualiza o texto do h1
    saudacaoElement.textContent = `${saudacao}, seja bem-vindo(a)!`;
}

// Executa a função assim que a página for carregada
document.addEventListener("DOMContentLoaded", atualizarSaudacao);
// ===============função para captura o nome===========================
// Captura o formulário e adiciona um evento para o submit
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    // Pega o nome digitado no campo de input
    const nome = document.getElementById('nome').value;

    // Verifica se o nome foi preenchido
    if (nome) {
        // Armazena o nome no localStorage
        localStorage.setItem('nomeUsuario', nome);

        // Redireciona para a página index.html, que está uma pasta acima
        window.location.href = '../index.html';
    } else {
        alert('Por favor, digite seu nome!');
    }
});

