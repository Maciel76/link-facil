let hideTimeout;

function showInfo(itemName) {
    clearTimeout(hideTimeout); // Cancela qualquer ocultação programada
    const infoBox = document.getElementById('info-' + itemName);
    infoBox.style.opacity = '1';
    infoBox.style.transform = 'translateY(0)';
    infoBox.style.pointerEvents = 'auto';
}

function scheduleHideInfo(itemName) {
    hideTimeout = setTimeout(() => hideInfo(itemName), 300); // Aguarda 300ms antes de esconder
}

function hideInfo(itemName) {
    const infoBox = document.getElementById('info-' + itemName);
    infoBox.style.opacity = '0';
    infoBox.style.transform = 'translateY(10px)';
    infoBox.style.pointerEvents = 'none';
}