// ====================	==================== ==================== ==================== ==================== ====================
// ==================== ==================== ==================== ==================== ==================== ====================
document.addEventListener("DOMContentLoaded", () => {

	fixAdStyle();
	fnSetQuest();
	fnSetSvgWidth();
	addClass2Question();
});



// ==================== ==================== ==================== ==================== ====================
// ==================== ==================== ==================== ==================== ====================
const fnSetSvgWidth = () => {
	const per_30 = Math.round(Number(window.innerWidth) * 0.35);
	const per_60 = Math.round(Number(window.innerWidth) * 0.7);

	let dPath = "";
	dPath += "M0 0 L0 60 ";
	dPath += "L" + per_30 + " 150 ";
	dPath += "L" + per_60 + " 20 ";
	dPath += "L" + window.innerWidth + " 100 ";
	dPath += "L" + window.innerWidth + " 0 ";

	// M0 0 L0 60 L350 150 L700 20 L980 100 L980 0
	const svg_desc = document.getElementById('svg-desc');
	svg_desc.setAttribute("d", dPath);
}



// ==================== ==================== ==================== ==================== ====================
// ==================== ==================== ==================== ==================== ====================
const addClass2Question = () => {
	Array.from(document.querySelectorAll('.question:not(.example)')).forEach((question, idx) => {
		question.classList.add('quest_' + idx);
	});
}



// ==================== ==================== ==================== ==================== ====================
// ==================== ==================== ==================== ==================== ====================
const fnSetQuest = () => {
	const wrap = document.getElementById('quest_wrap');
	this.global.questions.forEach(quest => {
		let html = '';

		html += '<div class="question">';
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