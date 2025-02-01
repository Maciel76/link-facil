// Exibe a sobreposição ao clicar
document.querySelectorAll('.icon-clickable').forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      var overlayId = item.getAttribute('data-overlay');
      var overlay = document.getElementById(overlayId);
  
      // Fecha outras caixas abertas
      document.querySelectorAll('.overlay-box').forEach(function(box) {
        box.style.display = 'none';
      });
  
      // Alterna a exibição da caixa de sobreposição
      overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
    });
  });
  
  // Fecha a sobreposição ao clicar fora
  window.onclick = function(event) {
    if (!event.target.matches('.icon-clickable')) {
      document.querySelectorAll('.overlay-box').forEach(function(box) {
        box.style.display = 'none';
      });
    }
  };
  