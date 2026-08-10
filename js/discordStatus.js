function atualizarPerfilDiscord() {
    fetch('https://api.lanyard.rest/v1/users/1431639858174103563')
        .then(response => response.json())
        .then(payload => {
            if (!payload || !payload.success || !payload.data) {
                return;
            }

            const data = payload.data;
            const avatarImg = document.querySelector('.avatarImage');
            const statusImg = document.querySelector('.discordStatus');
            const usernameElement = document.querySelector('.discordUserDiv span');

            if (avatarImg && data.discord_user && data.discord_user.id && data.discord_user.avatar) {
                const avatarUrl = `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png?size=512`;
                avatarImg.src = avatarUrl;
            }

            if (statusImg) {
                switch (data.discord_status) {
                    case 'online':
                        statusImg.src = '/img/online.png';
                        break;
                    case 'idle':
                        statusImg.src = '/img/idle.png';
                        break;
                    case 'dnd':
                        statusImg.src = '/img/dnd.png';
                        break;
                    default:
                        statusImg.src = '/img/offline.png';
                        break;
                }
            }

            if (usernameElement) {
                usernameElement.textContent = '@Phant0m0565';
            }
        })
        .catch(() => {});
}

atualizarPerfilDiscord();
setInterval(atualizarPerfilDiscord, 5000);