import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const evento = ['click', 'touchstart'];

  function openMenu() {
    menuList.classList.add('active');
    menuButton.classList.add('active');

    outsideClick(menuList, evento, () => {
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
    });
  }
  if (menuButton) {
    evento.forEach(evento => menuButton.addEventListener('click', openMenu));
  }
}
