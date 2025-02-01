# Sistema de Gerenciamento de Links para Sites do Atacadista Assaí

## Visão Geral
Este sistema foi desenvolvido para facilitar o gerenciamento e a organização de links relacionados aos diversos sites do Atacadista Assaí. O objetivo principal é centralizar o acesso a diferentes plataformas e recursos, proporcionando uma experiência mais eficiente e organizada para os usuários. O sistema foi implementado utilizando JavaScript puro, sem a necessidade de frameworks ou bibliotecas adicionais.

## Funcionalidades
- **Centralização de Links**: Agrega todos os links relevantes dos sites do Atacadista Assaí em um único local.
- **Facilidade de Acesso**: Interface intuitiva que permite o acesso rápido e fácil aos links desejados.
- **Atualização Dinâmica**: Capacidade de adicionar, remover ou atualizar links de forma dinâmica, garantindo que o sistema esteja sempre atualizado.
- **Responsividade**: Design responsivo que se adapta a diferentes dispositivos (desktop, tablet, mobile).

## Tecnologias Utilizadas
- **Frontend**: HTML, CSS, JavaScript puro (Vanilla JS).
- **Armazenamento Local**: Utilização do `localStorage` para persistência de dados no navegador.
- **Hospedagem**: Pode ser hospedado em qualquer servidor web estático (ex: GitHub Pages, Netlify, Vercel).

## Estrutura do Projeto
O projeto é composto por três arquivos principais:

- `index.html`: Estrutura básica da página, contendo a lista de links e o formulário para adicionar novos links.
- `style.css`: Estilos para a interface do usuário, garantindo uma experiência visual agradável e responsiva.
- `script.js`: Lógica do sistema, incluindo funções para adicionar, remover e exibir links dinamicamente.

## Como Funciona

### Armazenamento de Links
Os links são armazenados no `localStorage` do navegador, permitindo que os dados persistam mesmo após o fechamento da página. Cada link é salvo como um objeto contendo:

- **Nome**: Nome descritivo do link.
- **URL**: Endereço completo do link.
- **Descrição (opcional)**: Breve descrição sobre o link.

### Interface do Usuário
A interface é composta por:
- Uma lista de links cadastrados.
- Um formulário para adicionar novos links.
- Botões para editar ou remover links existentes.

## Instalação e Configuração

### Passos para Utilização
1. Clone o Repositório:
   ```bash
   git clone https://github.com/seu-usuario/sistema-links-assai.git
   cd sistema-links-assai
   ```
2. Abra o Projeto:
   - Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge, etc.).
3. Adicione Links:
   - Utilize o formulário na página para adicionar novos links.
   - Os links serão automaticamente salvos e exibidos na lista.

## Uso

### Adicionar um Novo Link
1. Preencha os campos do formulário:
   - **Nome**: Nome descritivo do link.
   - **URL**: Endereço completo do link.
   - **Descrição (opcional)**: Breve descrição sobre o link.
2. Clique em "Adicionar Link".
3. O link será salvo no `localStorage` e exibido na lista.

### Editar um Link Existente
1. Clique no botão "Editar" ao lado do link que deseja modificar.
2. Altere os campos no formulário que aparecerá.
3. Clique em "Salvar Alterações".

### Remover um Link
1. Clique no botão "Remover" ao lado do link que deseja excluir.
2. O link será removido do `localStorage` e da lista.

## Exemplo de Código

### Estrutura HTML
```html
<div id="link-list"></div>
<form id="link-form">
  <input type="text" id="link-name" placeholder="Nome do Link" required>
  <input type="url" id="link-url" placeholder="URL do Link" required>
  <input type="text" id="link-description" placeholder="Descrição (opcional)">
  <button type="submit">Adicionar Link</button>
</form>
```

### JavaScript (`script.js`)
```javascript
// Função para carregar links do localStorage
function loadLinks() {
  const links = JSON.parse(localStorage.getItem('links')) || [];
  const linkList = document.getElementById('link-list');
  linkList.innerHTML = '';

  links.forEach((link, index) => {
    const linkItem = document.createElement('div');
    linkItem.innerHTML = `
      <h3>${link.name}</h3>
      <p>${link.description || ''}</p>
      <a href="${link.url}" target="_blank">Acessar</a>
      <button onclick="editLink(${index})">Editar</button>
      <button onclick="removeLink(${index})">Remover</button>
    `;
    linkList.appendChild(linkItem);
  });
}

// Função para adicionar um novo link
document.getElementById('link-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('link-name').value;
  const url = document.getElementById('link-url').value;
  const description = document.getElementById('link-description').value;

  const links = JSON.parse(localStorage.getItem('links')) || [];
  links.push({ name, url, description });
  localStorage.setItem('links', JSON.stringify(links));

  loadLinks();
  document.getElementById('link-form').reset();
});

// Função para remover um link
function removeLink(index) {
  const links = JSON.parse(localStorage.getItem('links')) || [];
  links.splice(index, 1);
  localStorage.setItem('links', JSON.stringify(links));
  loadLinks();
}

// Função para editar um link
function editLink(index) {
  const links = JSON.parse(localStorage.getItem('links')) || [];
  const link = links[index];

  document.getElementById('link-name').value = link.name;
  document.getElementById('link-url').value = link.url;
  document.getElementById('link-description').value = link.description || '';

  removeLink(index);
}

// Carregar links ao iniciar a página
loadLinks();
```

## Licença
Este projeto está licenciado sob a Licença MIT.

## Contato
- **Email**: stwcontato@hotmail.com
- **GitHub**: Maciel76

