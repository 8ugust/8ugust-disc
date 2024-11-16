const fnMenuClick = () => {
	let img = document.getElementsByClassName('header-wrap')[0].children[2];
	const menu = document.getElementById('menu-wrap');
	if (menu.style.display == 'none') {
		menu.style.animation = 'active 0.2s ease-in';
		img.setAttribute('src', 'public/exit.png');
		menu.style.display = 'flex';
		menu.style.height = '100%';
	} else {
		menu.style.animation = 'remove 0.2s ease-in';
		img.setAttribute('src', 'public/menu.png');
		menu.style.height = '0px';

		setTimeout(() => menu.style.display = 'none', 200);
	}
}



const fnListClick = (e) => {
	const mIdx = e.target.dataset.index;
	if (mIdx == "A0") window.location.reload();
	if (mIdx == "A1") {
		document.getElementById('test-wrap').style.display = 'none';
		document.getElementById('result-wrap').style.display = 'none';
		document.getElementById('explain-wrap').style.display = 'flex';
	}
	
	document.querySelector('#menu-wrap .now').classList.remove('now');
	e.target.classList.add('now');

	fnMenuClick();
}