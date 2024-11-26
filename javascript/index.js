// ====================	==================== ==================== ==================== ==================== ====================
// ==================== ==================== ==================== ==================== ==================== ====================
document.addEventListener("DOMContentLoaded", () => {

	fnSetSvgWidth();		/* SVG 생성 */
	fnSetQuest();			/* 질문생성 */
	
	// 광고 사이즈에 따라서 광고 영역 변경하는 함수였는데 미사용 처리.
	// 쿠팡 광고를 클릭형으로 볼 수 있는지 확인해보자.
	// fixAdStyle();

	// Test
	fnQuestEnd('T');
});





// ==================== ==================== ==================== ==================== ====================
// ==================== ==================== ==================== ==================== ====================
const fnSetSvgWidth = () => {
	const root = document.getElementById('root');
	const wWidth = Number(root.scrollWidth)*0.9;
	const rWidth = Number(root.scrollWidth);

	// M0 0 L0 60 L350 150 L700 20 L980 100 L980 0
	const wper_30 = Math.round(wWidth * 0.35);
	const wper_60 = Math.round(wWidth * 0.7);
	const per_30 = Math.round(rWidth * 0.35);
	const per_60 = Math.round(rWidth * 0.7);

	let dPath = "";
	dPath += "M0 0 L0 60 ";
	dPath += "L" + per_30 + " 150 ";
	dPath += "L" + per_60 + " 20 ";
	dPath += "L" + rWidth + " 100 ";
	dPath += "L" + rWidth + " 0 ";
	document.getElementById('svg-desc').setAttribute("d", dPath);
	document.getElementById('exp-desc').setAttribute("d", dPath);


	// 결과 비율
	let rPath = "";
	rPath += "M0 0 L0 60 ";
	rPath += "L" + per_30 + " 100 ";
	rPath += "L" + per_60 + " 10 ";
	rPath += "L" + rWidth + " 50 ";
	rPath += "L" + rWidth + " 0 ";
	document.getElementById('svg-ratio-top').setAttribute("d", rPath);
	document.getElementById('svg-ratio-bot').setAttribute("d", rPath);


	// 명언
	let wPath = "";
	wPath += "M0 0 L0 30 ";
	wPath += "L" + wper_30 + " 50 ";
	wPath += "L" + wper_60 + " 10 ";
	wPath += "L" + wWidth + " 50 ";
	wPath += "L" + wWidth + " 0 ";
	document.getElementById('svg-wise-top').setAttribute("d", wPath);
	document.getElementById('svg-wise-bot').setAttribute("d", wPath);
}





// ==================== ==================== ==================== ==================== ====================
// ■ 이름 : fnSetQuest
// ■ 내용 : 28개의 질문 영역을 생성.
// ==================== ==================== ==================== ==================== ====================
const fnSetQuest = () => {
	const wrap = document.getElementById('quest_wrap');
	this.global.questions.forEach((quest, idx) => {
		let html = '';

		html += '<div class="question quest_' + (idx + 1) + '">';
		html += 	'<div class="q-row">';
		html += 		'<div class="q-cell q-head"><b>적합</b></div>';
		html += 		'<div class="q-cell q-mid"></div>';
		html += 		'<div class="q-cell q-head"><b>부적합</b></div>';
		html += 	'</div>';
		html += 	'<div class="q-row">';
		html += 		'<div class="q-cell" data-title="positive" data-value="N"><img src="public/check.png" onclick="fnClickChk(event)"/></div>';
		html += 		'<div class="q-cell q-mid">' + quest[0][0] + '</div>';
		html += 		'<div class="q-cell" data-title="negative" data-value="N"><img src="public/check.png" onclick="fnClickChk(event)"/></div>';
		html += 	'</div>';
		html += 	'<div class="q-row">';
		html += 		'<div class="q-cell" data-title="positive" data-value="N"><img src="public/check.png" onclick="fnClickChk(event)"/></div>';
		html += 		'<div class="q-cell q-mid">' + quest[1][0] + '</div>';
		html += 		'<div class="q-cell" data-title="negative" data-value="N"><img src="public/check.png" onclick="fnClickChk(event)"/></div>';
		html += 	'</div>';
		html += 	'<div class="q-row">';
		html += 		'<div class="q-cell" data-title="positive" data-value="N"><img src="public/check.png" onclick="fnClickChk(event)"/></div>';
		html += 		'<div class="q-cell q-mid">' + quest[2][0] + '</div>';
		html += 		'<div class="q-cell" data-title="negative" data-value="N"><img src="public/check.png" onclick="fnClickChk(event)"/></div>';
		html += 	'</div>';
		html += 	'<div class="q-row">';
		html += 		'<div class="q-cell" data-title="positive" data-value="N"><img src="public/check.png" onclick="fnClickChk(event)"/></div>';
		html += 		'<div class="q-cell q-mid">' + quest[3][0] + '</div>';
		html += 		'<div class="q-cell" data-title="negative" data-value="N"><img src="public/check.png" onclick="fnClickChk(event)"/></div>';
		html += 	'</div>';
		html += '</div>';

		html = new DOMParser().parseFromString(html, 'text/html');
		wrap.appendChild(html.body.childNodes[0]);
	})
}





// ==================== ==================== ==================== ==================== ====================
// ==================== ==================== ==================== ==================== ====================
const fixAdStyle = () => {
	const adWrap = document.getElementById('ad-wrap');
	const adClassWrap = document.getElementsByClassName('ad-wrap')[0];
	const adClassBody = document.getElementsByClassName('ad-body')[0];
	const adClassMain = document.getElementsByClassName('ad-main')[0];
	const observer = new MutationObserver((mutations, observer) => {
		adWrap.style.height = '';
		adClassBody.style.height = '';
		adClassWrap.style.height = '';
		adClassMain.style.height = '';
	})

	Array.from([adWrap, adClassWrap, adClassBody, adClassMain]).forEach(element => {
		observer.observe(element, {
			attributes: true,
			attributeFilter: ['style']
		});
	})
}