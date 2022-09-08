const toggleNavMenu = () => {
  const navMenu = document.getElementById('nav-menu');
  const content = document.getElementsByClassName('main-content');
  if (content) {
    for (let i = 0; i < content.length; i++) {
      content[i].classList.toggle('hidden');
    }
  }
  if (navMenu && navMenu) {
    navMenu.classList.toggle('hidden');
  }
};

window.addEventListener('load', () => {
  const navToggle = document.getElementById('nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', (event) => toggleNavMenu());
  }
  window.addEventListener('resize', (event) => {
    if (window.innerWidth >= 1024) {
			const navMenu = document.getElementById('nav-menu');
			if(!navMenu.classList.contains('hidden')) {
				toggleNavMenu();
			}
    }
  });
});
