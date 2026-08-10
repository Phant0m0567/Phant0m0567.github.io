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
            const presenceTextElement = document.querySelector('.discordUser h3');

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
                usernameElement.textContent = data.discord_user?.global_name || data.discord_user?.display_name || '@Phant0m0565';
            }

            if (presenceTextElement) {
                let presenceText = '';

                if (data.listening_to_spotify && data.spotify && data.spotify.song && data.spotify.artist) {
                    presenceText = `Listening to ${data.spotify.song} - ${data.spotify.artist}`;
                } else if (Array.isArray(data.activities) && data.activities.length > 0) {
                    const customStatus = data.activities.find(activity => activity.type === 4 && activity.state);
                    const primaryActivity = data.activities.find(activity => activity.type !== 4);

                    if (customStatus) {
                        presenceText = customStatus.state;
                    } else if (primaryActivity) {
                        presenceText = primaryActivity.name || '';
                    }
                }

                if (!presenceText) {
                    if (data.discord_status === 'online') presenceText = 'Online';
                    else if (data.discord_status === 'idle') presenceText = 'Idle';
                    else if (data.discord_status === 'dnd') presenceText = 'Do Not Disturb';
                    else presenceText = 'Offline';
                }

                presenceTextElement.textContent = presenceText;
            }
        })
        .catch(() => {});
}

document.addEventListener('DOMContentLoaded', function() {
    atualizarPerfilDiscord();
    setInterval(atualizarPerfilDiscord, 5000);
});