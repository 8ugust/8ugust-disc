// ====================	==================== ==================== ==================== ==================== ====================
// ==================== ==================== ==================== ==================== ==================== ====================
const questions = [
	[['열정적인', 'I', 'I'], ['대담한', 'D', 'D'], ['치밀한', 'C', 'C'], ['만족해하는', 'S', 'S']],
	[['신중한', 'C', 'C'], ['결단력 있는', 'D', 'D'], ['확신을 주는', 'I', 'I'], ['호의적인', 'S', 'N']],
	[['다정한', 'I', 'N'], ['정확한', 'C', 'C'], ['솔직하게 말하는', 'D', 'D'], ['변화가 적은', 'N', 'S']],
	[['말하기 좋아하는', 'I', 'I'], ['자제력있는', 'C', 'C'], ['관습을 따르는', 'S', 'S'], ['결단력 있는', 'D', 'D']],
	[['도전하는', 'D', 'D'], ['통찰력있는', 'C', 'C'], ['사교적인', 'I', 'I'], ['온건한', 'S', 'S']],
	[['온화한', 'S', 'S'], ['설득력있는', 'I', 'N'], ['겸손한', 'N', 'C'], ['독창적 아이디어 내는', 'N', 'D']],
	[['표현력있는', 'I', 'I'], ['조심성있는', 'C', 'C'], ['주도적인', 'D', 'D'], ['민감히 반응하는', 'N', 'S']],
	[['호의적인', 'I', 'I'], ['세심한', 'C', 'N'], ['겸손한', 'S', 'S'], ['참을성이 적은', 'D', 'D']],
	[['사려깊은', 'C', 'C'], ['남 의견에 잘 동의하는', 'S', 'S'], ['매력적인', 'I', 'I'], ['확고한', 'D', 'D']],
	[['용감한', 'D', 'D'], ['격려하는', 'I', 'I'], ['순응하는', 'S', 'S'], ['수줍어하는', 'N', 'C']],
	[['내성적인', 'C', 'C'], ['호의적인', 'S', 'S'], ['의지가 강한', 'D', 'D'], ['명량한', 'I', 'I']],
	[['남을 격려하는', 'I', 'I'], ['친절한', 'S', 'S'], ['주의깊은', 'C', 'C'], ['독립심 강한', 'D', 'D']],
	[['경쟁심있는', 'D', 'D'], ['생각이 깊은', 'S', 'S'], ['활발한', 'I', 'I'], ['자신을 잘 드러내지 않는', 'C', 'C']],
	[['세밀한', 'C', 'C'], ['유순한', 'S', 'S'], ['완고한', 'D', 'D'], ['놀기 좋아하는', 'I', 'I']],
	[['사람에게 호감을 주는', 'I', 'I'], ['생각이 깊은', 'C', 'N'], ['의지가 굳은', 'D', 'D'], ['일관되게 행동하는', 'S', 'S']],
	[['논리적인', 'C', 'C'], ['과감한', 'D', 'D'], ['충실한', 'S', 'S'], ['인기있는', 'I', 'I']],
	[['사교적인', 'I', 'I'], ['참을성있는', 'S', 'S'], ['자신감있는', 'D', 'D'], ['말씨가 부드러운', 'C', 'C']],
	[['의존적인', 'S', 'S'], ['의욕적인', 'D', 'N'], ['철저한', 'C', 'C'], ['활기있는', 'I', 'I']],
	[['의욕적인', 'D', 'D'], ['외향적인', 'I', 'I'], ['친근한', 'S', 'S'], ['갈등을 피하는', 'N', 'C']],
	[['유머가 있는', 'I', 'I'], ['이해심있는', 'S', 'S'], ['공평한', 'N', 'C'], ['단호한', 'D', 'D']],
	[['자제력있는', 'C', 'C'], ['관대한', 'S', 'S'], ['활기있는', 'I', 'I'], ['고집스런', 'D', 'D']],
	[['재치있는', 'I', 'I'], ['내향적인', 'C', 'C'], ['강인한', 'D', 'D'], ['쉽게 화내지않는', 'S', 'S']],
	[['남과 잘 어울리는', 'I', 'I'], ['점잖은', 'C', 'C'], ['활기찬', 'D', 'D'], ['너그러운', 'S', 'S']],
	[['매력있는', 'I', 'I'], ['흡족해하는', 'S', 'S'], ['지시하는', 'D', 'D'], ['양보하는', 'C', 'C']],
	[['자기주장을 하는', 'D', 'D'], ['체계적인', 'C', 'C'], ['협력적인', 'S', 'S'], ['즐거운', 'I', 'I']],
	[['유쾌한', 'I', 'I'], ['정교한', 'C', 'C'], ['결과를 요구하는', 'D', 'D'], ['침착한', 'S', 'S']],
	[['변화를 추구하는', 'D', 'D'], ['우호적인', 'S', 'S'], ['호소력있는', 'I', 'I'], ['꼼꼼한', 'C', 'C']],
	[['공손한', 'C', 'C'], ['새롭게 시작하는', 'D', 'D'], ['낙천적인', 'I', 'I'], ['도움을 주려하는', 'S', 'S']]
];





// ====================	==================== ==================== ==================== ==================== ====================
// ==================== ==================== ==================== ==================== ==================== ====================
document.addEventListener("DOMContentLoaded", () => {

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
	questions.forEach(quest => {
		let html = '';

		html += '<div class="question">';
		html += 	'<div class="q-row q-head">';
		html += 		'<div class="q-cell"><b>적합</b></div>';
		html += 		'<div class="q-cell q-mid"></div>';
		html += 		'<div class="q-cell"><b>부적합</b></div>';
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