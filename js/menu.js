const PARAGRAPH = document.querySelector('body');
const BUTTONS = document.querySelectorAll('.data-theme button');

if (localStorage.getItem('demo-theme')) {
	const theme = localStorage.getItem('demo-theme');
	PARAGRAPH.classList.add(`theme-${theme}`);
}

BUTTONS.forEach(button => {
  button.addEventListener('click', e => {
    let colour = button.getAttribute('data-theme');
    PARAGRAPH.className = '';
    PARAGRAPH.classList.add(`theme-${colour}`);
    localStorage.setItem('demo-theme', colour);
  });
});




const activeMenu = () => {
  const openMenuButton = document.getElementById('open-menu-button')
  const closeMenuButton = document.getElementById('close-menu-button')
  const mainMenu = document.getElementById('main-menu')
  if (openMenuButton && mainMenu && closeMenuButton) {
    openMenuButton.addEventListener('click', () => {
      mainMenu.classList.add('active')
    })
    closeMenuButton.addEventListener('click', () => {
      mainMenu.classList.remove('active')
    })
  }
}

activeMenu()
