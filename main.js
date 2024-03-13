var btnMenu = document.querySelector('#menu');
var menuLateral = document.querySelector('.nav-lateral');
var menuLink = document.querySelector('.menu-link');
// Usar querySelector em vez de querySelectorAll para selecionar o elemento com a classe '.teste'
var menus = document.querySelector('.container-menu');

btnMenu.addEventListener('click', toggleMenu);

var isMenuVisible = true;

function toggleMenu() {
    if (isMenuVisible) {
      menuLateral.classList.add('nav-lateral-hidden');
      menuLink.classList.add('menu-item');
      // Adiciona a classe '.sumir' ao único elemento com a classe '.teste'
      menus.classList.add('hidden');
    } else {
      menuLateral.classList.remove('nav-lateral-hidden');
      menuLink.classList.remove('menu-item');
      // Remove a classe '.sumir' do único elemento com a classe '.teste'
      menus.classList.remove('hidden');
    }
    
    // Atualiza o estado do menu
    isMenuVisible = !isMenuVisible;
}
