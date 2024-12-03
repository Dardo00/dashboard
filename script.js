document.addEventListener('DOMContentLoaded', () => {
    // Função para mostrar e esconder o menu lateral ao clicar no botão
    const menuToggle = document.querySelector('.menu-toggle');
    const menuAside = document.querySelector('aside');

    if (menuToggle) {  // Verifica se o menuToggle foi encontrado
        menuToggle.addEventListener('click', () => {
            menuAside.classList.toggle('active');
        });
    }

    // Efeito de hover nos cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Efeito de hover nos itens do menu lateral
    const menuItems = document.querySelectorAll('aside ul li');
    menuItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = '#444'; // Altera cor do item ao passar o mouse
            item.style.cursor = 'pointer'; // Torna o cursor como pointer
        });

        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = ''; // Restaura a cor do item quando o mouse sai
        });
    });

    // Efeito de clique no ícone de notificações
    const notificationIcon = document.querySelector('.notifications i');
    const notificationBadge = document.querySelector('.badge');

    if (notificationIcon) {  // Verifica se o ícone de notificações foi encontrado
        notificationIcon.addEventListener('click', () => {
            alert('Você tem novas notificações!');
            notificationBadge.style.display = 'none'; // Esconde o badge quando as notificações forem clicadas
        });
    }
});
