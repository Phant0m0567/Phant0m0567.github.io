
function criarLockscreen() {

  const lockscreen = document.createElement('div');
  lockscreen.id = 'lockscreen';
  lockscreen.classList.add('lockscreen');

  lockscreen.style.willChange = 'opacity, transform';
  lockscreen.style.backfaceVisibility = 'hidden';
  lockscreen.style.transform = 'translateZ(0)';

  const lockContent = document.createElement('div');
  lockContent.classList.add('lock-content');
  lockContent.style.willChange = 'transform, opacity';

  const clickText = document.createElement('div');
  clickText.classList.add('click-text');
  clickText.innerHTML = '[ click to unlock ]';
  clickText.style.willChange = 'opacity, transform';

  const pulseStyle = document.createElement('style');
  pulseStyle.textContent = `
      @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
      }
      .click-text {
          animation: pulse 1.5s infinite ease-in-out;
      }
  `;
  document.head.appendChild(pulseStyle);

  lockContent.appendChild(clickText);
  lockscreen.appendChild(lockContent);

  document.body.insertBefore(lockscreen, document.body.firstChild);

  const container = document.getElementById('container');
  if (container) {
      container.style.opacity = '0';
      container.style.visibility = 'hidden';
      container.style.transition = 'opacity 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000), visibility 0s linear 0.8s';
      container.style.willChange = 'opacity';
  }

  const elementosParaAnimar = document.querySelectorAll('.elemento-para-animar');
  elementosParaAnimar.forEach(elemento => {
      elemento.style.opacity = '0';
      elemento.style.transform = 'translateY(20px)';
      elemento.style.willChange = 'opacity, transform';

      elemento.classList.remove('animate-fade-in');
  });

  let desbloqueado = false;
  let animacaoDesbloqueio = null;
  
  lockscreen.addEventListener('click', () => {
      if (desbloqueado) return;
      desbloqueado = true;

      clickText.style.animation = 'none';

      lockscreen.style.transition = 'opacity 500ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1)';
      lockscreen.style.opacity = '0';
      lockscreen.style.transform = 'scale(1.1) translateZ(0)';

      setTimeout(() => {
          if (container) {
              container.style.visibility = 'visible';
              container.style.opacity = '1';
              container.style.transition = 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
          }

          setTimeout(() => {
              animarElementosSequencialmente();
          }, 200);

          setTimeout(() => {
              lockscreen.remove();
          }, 800);
      }, 500);
  });
}

function animarElementosSequencialmente() {
  const elementos = document.querySelectorAll('.elemento-para-animar');
  
  elementos.forEach((elemento) => {

      const delayClass = Array.from(elemento.classList).find(cls => cls.startsWith('delay-'));
      let delay = 0;
      
      if (delayClass) {

          const delayValue = parseInt(delayClass.replace('delay-', ''), 10);
          delay = delayValue * 100;
      } else if (elemento.dataset.delay) {

          delay = parseInt(elemento.dataset.delay, 10);
      }
      
      setTimeout(() => {

          elemento.style.transition = 'opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1)';
          elemento.style.opacity = '1';
          elemento.style.transform = 'translateY(0)';

          setTimeout(() => {
              elemento.style.willChange = 'auto';
          }, 500);
      }, delay);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  criarLockscreen();

  const elementosParaAnimar = document.querySelectorAll('.elemento-para-animar');
  if (elementosParaAnimar.length > 0) {

      elementosParaAnimar.forEach(elemento => {
          if ('IntersectionObserver' in window) {
              const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                      if (entry.isIntersecting) {

                          entry.target.style.willChange = 'opacity, transform';
                          observer.unobserve(entry.target);
                      }
                  });
              });
              observer.observe(elemento);
          }
      });
  }
});