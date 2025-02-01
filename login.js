// Função para redirecionar para a página do departamento escolhido
function redirecionarParaDepartamento(departamento) {
    switch (departamento) {
        case '1':
            window.location.href = "sistemasti.html";
            break;
        case '2':
            window.location.href = "frente-de-caixa.html";
            break;
        case '3':
            window.location.href = "departamento3.html";
            break;
        case '4':
            window.location.href = "departamento4.html";
            break;
        case '5':
            window.location.href = "departamento5.html";
            break;
        case '6':
            window.location.href = "departamento5.html";
            break;
         case '7':
            window.location.href = "departamento5.html";
            break;
         case '8':
            window.location.href = "departamento5.html";
            break;
        default:
            // Se o valor do departamento for inválido, exiba a mensagem de erro
            document.getElementById('erroDepartamento').style.display = 'block';
    }
}

// Captura o formulário e adiciona um evento para o submit
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    // Pega o valor do departamento selecionado
    const departamento = document.getElementById('departamento').value;

    // Pega o elemento de erro
    const erroDepartamento = document.getElementById('erroDepartamento');

    // Verifica se o campo de departamento foi selecionado corretamente
    if (departamento) {
        // Se o campo estiver preenchido, esconde a mensagem de erro (caso ela esteja visível)
        erroDepartamento.style.display = 'none';

        // Redireciona para a página do departamento
        redirecionarParaDepartamento(departamento);
    } else {
        // Se o departamento não foi selecionado, exibe a mensagem de erro
        erroDepartamento.style.display = 'block';
    }
});
