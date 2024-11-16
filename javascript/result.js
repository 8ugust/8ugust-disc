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





const fnSetResult = () => {
	const color = this.global.category[this.global.result][1];


	// 결과 헤더 설정
	document.getElementById('type').innerHTML = this.global.category[this.global.result][0];
	document.getElementById('disc').innerHTML = this.global.result;
	document.getElementById('disc').style.color = color;

	// 결과 비율 설정
	document.getElementById('type-ratio-main').style.background = color;
	document.getElementById('svg-ratio-top').setAttribute('fill', color);
	document.getElementById('svg-ratio-bot').setAttribute('fill', color);


	// 결과 화면 오픈
	document.getElementById('test-wrap').style.display = 'none';
	document.getElementById('result-wrap').style.display = 'flex';
}