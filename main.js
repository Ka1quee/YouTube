var btnMenu = document.querySelector('#menu');
var menuLateral = document.querySelector('.nav-lateral');
var menuLink = document.querySelector('.menu-link');
var menus = document.querySelector('.container-menu');
var conteudoPagina = document.querySelector('.conteudo-pagina')

btnMenu.addEventListener('click', toggleMenu);

var isMenuVisible = true;

function toggleMenu() {
    if (isMenuVisible) {
      menuLateral.classList.add('nav-lateral-hidden');
      menuLink.classList.add('menu-item');
      menus.classList.add('hidden');
      conteudoPagina.classList.add('mover-conteudo')
    } else {
      menuLateral.classList.remove('nav-lateral-hidden');
      menuLink.classList.remove('menu-item');
      menus.classList.remove('hidden');
      conteudoPagina.classList.remove('mover-conteudo')
    }
    
    isMenuVisible = !isMenuVisible;
}

// Desenvolvido por Kaique Oliveira