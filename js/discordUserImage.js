function atualizarPerfilDiscord(userId) {

    const targetUserId = userId || '1431639858174103563';

    fetch(`https://discorduserstatus-2-0.onrender.com/status/${targetUserId}`)
    .then(response => response.json())
    .then(data => {

        const avatarImg = document.querySelector('.avatarImage');
        if (avatarImg && data.avatarUrl) {

            const avatarSrc = data.avatarUrl.includes('?') ? 
                data.avatarUrl + '&t=' + Date.now() : 
                data.avatarUrl + '?t=' + Date.now();
            
            avatarImg.src = avatarSrc;
            console.log(`Avatar do usuário ${targetUserId} atualizado:`, avatarSrc);
        }

        const statusImg = document.querySelector('.discordStatus');
        if (statusImg) {

            switch(data.status) {
                case 'online': statusImg.src = '/img/online.png'; break;
                case 'idle': statusImg.src = '/img/idle.png'; break;
                case 'dnd': statusImg.src = '/img/dnd.png'; break;
                default: statusImg.src = '/img/offline.png';
            }
            console.log(`Status do usuário ${targetUserId} atualizado para:`, data.status);
        } else {
            console.error('Elemento .discordStatus não encontrado no DOM');
        }

        const usernameElement = document.querySelector('.username');
        if (usernameElement && data.username) {
            usernameElement.textContent = data.username;
        }
    })
    .catch(error => {
        console.error('Erro ao buscar status:', error);

        const statusElement = document.querySelector('.status-debugging');
        if (statusElement) {
            statusElement.textContent = 'Erro ao conectar: ' + error.message;
            statusElement.style.color = 'red';
        }
    });
}

function determinarUsuarioPagina() {



    const currentPath = window.location.pathname;
    if (currentPath.includes('meuperfil') || currentPath.includes('perfil2')) {

        return '1431639858174103563';
    }

    return '1431639858174103563';
}

document.addEventListener('DOMContentLoaded', function() {

    const avatarImg = document.querySelector('.avatarImage');
    if (avatarImg) {
        avatarImg.src = '';
    }

    const userId = determinarUsuarioPagina();

    atualizarPerfilDiscord(userId);

    setInterval(() => atualizarPerfilDiscord(userId), 5000);
});

const avatarImg = document.querySelector('.avatarImage');
if (avatarImg) {
    avatarImg.addEventListener('click', function() {
        console.log('Atualizando avatar manualmente...');
        const userId = determinarUsuarioPagina();
        atualizarPerfilDiscord(userId);
    });
}