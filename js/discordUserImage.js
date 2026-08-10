function atualizarPerfilDiscord() {
    fetch('https://api.lanyard.rest/v1/users/1431639858174103563')
        .then(response => response.json())
        .then(payload => {
            if (!payload || !payload.success || !payload.data) {
                return;
            }

            const data = payload.data;
            const avatarImg = document.querySelector('.avatarImage');

            if (avatarImg && data.discord_user && data.discord_user.id && data.discord_user.avatar) {
                const avatarUrl = `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png?size=512&t=${Date.now()}`;
                avatarImg.src = avatarUrl;
            }
        })
        .catch(() => {});
}

document.addEventListener('DOMContentLoaded', function() {
    atualizarPerfilDiscord();
    setInterval(atualizarPerfilDiscord, 5000);
});

const avatarImg = document.querySelector('.avatarImage');
if (avatarImg) {
    avatarImg.addEventListener('click', function() {
        atualizarPerfilDiscord();
    });
}