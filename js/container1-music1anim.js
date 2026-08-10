document.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector('.container');
    const musicContainer = document.querySelector('.music-container');

    const animatedElements = [container, musicContainer];

    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes moveUp {
            from {
                transform: translateY(0);
            }
            to {
                transform: translateY(-60px);
            }
        }
    `;
    document.head.appendChild(styleSheet);

    animatedElements.forEach(element => {
        if (element) {
            element.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            element.style.zIndex = '1';
            element.style.position = 'relative';
            element.style.willChange = 'transform';
            element.style.backfaceVisibility = 'hidden';
            element.style.transformStyle = 'preserve-3d';
            element.style.opacity = '0';
        }
    });

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let rafId = null;

    let containerYOffset = 0;
    let targetYOffset = 0;
    let currentYOffset = 0;

    function animateTransform() {

        currentX += (targetX - currentX) * 0.1;
        currentY += (targetY - currentY) * 0.1;
        currentYOffset += (targetYOffset - currentYOffset) * 0.05;

        if (container) {

            container.style.transform = `perspective(1000px) translateY(${currentYOffset}px) rotateX(${currentY}deg) rotateY(${currentX}deg)`;
        }

        if (musicContainer && musicContainer.style.opacity === '1') {
            musicContainer.style.transform = `perspective(1000px) rotateX(${currentY}deg) rotateY(${currentX}deg)`;
        }

        rafId = requestAnimationFrame(animateTransform);
    }

    rafId = requestAnimationFrame(animateTransform);

    function addMouseMoveEvent(element) {
        if (element) {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const offsetX = (x - centerX) / centerX;
                const offsetY = (y - centerY) / centerY;
                const intensity = 9;

                targetX = offsetX * intensity;
                targetY = offsetY * intensity;

                e.stopPropagation();
            });
        }
    }

    animatedElements.forEach(addMouseMoveEvent);

    function addMouseLeaveEvent(element) {
        if (element) {
            element.addEventListener('mouseleave', () => {

                targetX = 0;
                targetY = 0;
            });
        }
    }

    animatedElements.forEach(addMouseLeaveEvent);

    animatedElements.forEach(element => {
        if (element) {
            element.addEventListener('mouseenter', (e) => {
                e.stopPropagation();
            });
        }
    });

    document.body.addEventListener('click', () => {

        if (container) {
            container.style.animation = 'fadeIn 0.8s forwards';

            container.addEventListener('animationend', (e) => {
                if (e.animationName === 'fadeIn') {

                    container.style.animation = '';
                    container.style.opacity = '1';
                }
            }, { once: true });
        }

        setTimeout(() => {

            if (musicContainer) {
                musicContainer.style.animation = 'fadeIn 0.8s forwards';

                musicContainer.addEventListener('animationend', (e) => {
                    if (e.animationName === 'fadeIn') {

                        musicContainer.style.animation = '';
                        musicContainer.style.opacity = '1';
                    }
                }, { once: true });
            }

            if (container) {

                targetYOffset = -60;


            }
        }, 2480);
    }, { once: true });
});