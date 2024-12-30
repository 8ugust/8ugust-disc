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





const fnSetResult = (test) => {

	// 테스트 DI 고정
	if (test != undefined) {
		this.global.result = [
			[["D", 24], ["I", 19], ["S", 8], ["C", 7]], "DI"
		];
	}

	const result = this.global.result[1]; // 결과(DI)
	const type = this.global.category[result][1]; // 대표유형(D)
	const strength = this.global.type[type][1]; // 대표유형명
	const color = this.global.type[type][0]; // 대표유형색

	// 헤더에 결과값 설정
	document.getElementById('type').innerHTML = this.global.category[result][0];
	document.getElementById('strength').innerHTML = strength;
	document.getElementById('disc').style.color = color;
	document.getElementById('disc').innerHTML = result;

	// 결과 분류 유형(D/I/S/C)에 따른 SVG 색상 설정
	document.getElementById('svg-ratio-top').setAttribute('fill', color);
	document.getElementById('svg-ratio-bot').setAttribute('fill', color);
	document.getElementById('svg-wise-top').setAttribute('fill', color);
	document.getElementById('svg-wise-bot').setAttribute('fill', color);
	document.getElementById('type-ratio-main').style.background = color;
	document.getElementById('summary').style.borderColor = color;
	document.getElementById('wiseWrap').style.background = color;

	// 각 유형 별 점수를 그래프로 환산하여 출력.
	const scores = { D: 27, I: 28, S: 26, C: 24 };
	this.global.result[0].forEach(([key, val]) => {
		const percent = Math.floor(val/scores[key]*100);
		document.getElementById('fill_' + key).style.width = percent + '%';
		document.getElementById('num_' + key).innerHTML = percent + '%';
	});

	// 각 영역 설정
	document.querySelector('#summary p').innerHTML = this.global.type[type][2];	// 요약
	Array.from(document.getElementsByClassName('p-section')).forEach((p, idx) => {
		p.innerHTML = this.global.category[result][Number(idx) + 2];
	})

	// 결과 화면 오픈
	document.getElementById('test-wrap').style.display = 'none';
	document.getElementById('result-wrap').style.display = 'flex';
}