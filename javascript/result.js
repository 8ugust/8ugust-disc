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
	const result = this.global.result[1];
	const type = this.global.category[result][1];
	const strength = this.global.type[type][1];
	const color = this.global.type[type][0];


	// 헤더에 결과값 설정
	document.getElementById('type').innerHTML = this.global.category[result][0];
	document.getElementById('strength').innerHTML = strength;
	document.getElementById('disc').style.color = color;
	document.getElementById('disc').innerHTML = result;

	// 결과 분류 유형(D/I/S/C)에 따른 SVG 색상 설정
	document.getElementById('svg-ratio-top').setAttribute('fill', color);
	document.getElementById('svg-ratio-bot').setAttribute('fill', color);
	document.getElementById('type-ratio-main').style.background = color;
	document.getElementById('summary').style.borderColor = color;

	// 각 유형 별 점수를 그래프로 환산하여 출력.
	const scores = { D: 27, I: 28, S: 26, C: 24 };
	this.global.result[0].forEach(([key, val]) => {
		const percent = Math.floor(val/scores[key]*100);
		document.getElementById('fill_' + key).style.width = percent + '%';
		document.getElementById('num_' + key).innerHTML = percent + '%';
	});

	// // 각 타입에 따른 설명 영역 디스플레이 활성화.
	Array.from(document.getElementsByClassName(type)).forEach(el => {
		el.style.display = 'block';
	})










	// 결과 화면 오픈
	document.getElementById('test-wrap').style.display = 'none';
	document.getElementById('result-wrap').style.display = 'flex';
}