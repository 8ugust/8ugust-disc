const fnShowAd = () => {
	const ad = document.getElementById('ad-wrap');
	ad.style.display = 'flex';

	const interval = setInterval(() => {
		const sec = document.getElementById('btnSec');
		let num = Number(sec.innerHTML.substring(0, 1));
		sec.innerHTML = --num + ' 초';

		if (num == 0) {
			clearInterval(interval);
			sec.classList.add('done');
			sec.classList.remove('wait');
			sec.innerHTML = '결과 확인하기';
		}
	}, 1000);
}