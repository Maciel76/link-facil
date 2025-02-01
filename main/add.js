const chooseLinksBtn = document.getElementById('chooseLinksBtn');
const modal = document.getElementById('modal');
const saveBtn = document.getElementById('saveBtn');
const thumbnailForm = document.getElementById('thumbnailForm');
const iconItems = document.querySelectorAll('.icon-item');

// Abrir o modal ao clicar no botão "Escolher Links Visíveis"
chooseLinksBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    loadThumbnailForm();
});

// Fechar o modal ao clicar no botão "Fechar"
document.getElementById('closeModal').addEventListener('click', () => {
    modal.style.display = 'none';
});

// Carregar o formulário com miniaturas
function loadThumbnailForm() {
    thumbnailForm.innerHTML = ''; // Limpa o formulário antes de carregar
    const visibleLinks = JSON.parse(localStorage.getItem('visibleLinks')) || [];
    
    iconItems.forEach(item => {
        const name = item.getAttribute('data-name');
        const imgSrc = item.querySelector('img').src;
        const checked = visibleLinks.includes(name); // Verifica se o item está visível no localStorage

        // Criar miniaturas dinâmicas
        const thumbnailItem = document.createElement('div');
        thumbnailItem.classList.add('thumbnail-item');
        if (checked) {
            thumbnailItem.classList.add('selected'); // Marcar como selecionado se estiver visível
        }
        thumbnailItem.innerHTML = `
            <img src="${imgSrc}" alt="${name}">
            <p>${name}</p>
        `;

        // Adicionar evento de clique para selecionar/desselecionar
        thumbnailItem.addEventListener('click', () => {
            thumbnailItem.classList.toggle('selected'); // Alternar entre selecionado e não selecionado
        });

        thumbnailForm.appendChild(thumbnailItem);
    });
}

// Função para verificar se o link é visível com base no localStorage
function isLinkVisible(name) {
    const visibleLinks = JSON.parse(localStorage.getItem('visibleLinks')) || [];
    return visibleLinks.includes(name);
}

// Salvar as preferências ao clicar em "Salvar"
saveBtn.addEventListener('click', () => {
    const selectedLinks = [];
    const thumbnailItems = thumbnailForm.querySelectorAll('.thumbnail-item');
    thumbnailItems.forEach(thumbnail => {
        const name = thumbnail.querySelector('p').innerText;
        if (thumbnail.classList.contains('selected')) {
            selectedLinks.push(name); // Adiciona apenas os itens selecionados
        }
    });

    // Salvar a lista no localStorage
    localStorage.setItem('visibleLinks', JSON.stringify(selectedLinks));
    updateVisibleLinks(); // Atualiza a visibilidade dos itens
    modal.style.display = 'none'; // Fechar o modal após salvar
});

// Atualizar a visibilidade das imagens com base no localStorage
function updateVisibleLinks() {
    const visibleLinks = JSON.parse(localStorage.getItem('visibleLinks')) || [];
    
    // Mostrar ou esconder os itens com base nas preferências salvas
    iconItems.forEach(item => {
        const name = item.getAttribute('data-name');
        if (visibleLinks.includes(name)) {
            item.style.display = 'block'; // Mostrar o item
        } else {
            item.style.display = 'none'; // Esconder o item
        }
    });
}

// Carregar as preferências salvas ao carregar a página
window.onload = function () {
    // Verificar se há dados salvos no localStorage
    if (localStorage.getItem('visibleLinks')) {
        updateVisibleLinks(); // Atualiza a página com base nas preferências salvas
    } else {
        // Se não houver dados salvos, mostrar todos os itens como padrão
        iconItems.forEach(item => {
            item.style.display = 'block';
        });
    }
};

