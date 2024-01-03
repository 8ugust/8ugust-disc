const fnMenuClick = () => {
	const menu = document.getElementById('menu-wrap');
	if (menu.style.display == 'none') {
		menu.style.animation = 'active 0.2s ease-in';
		menu.style.display = 'flex';
		menu.style.height = '100%';
	} else {
		menu.style.animation = 'remove 0.2s ease-in';
		menu.style.height = '0px';
		setTimeout(() => menu.style.display = 'none', 200);
	}
}