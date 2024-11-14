// ==================== ==================== ==================== ====================
// Check Btn Click Event =================== ==================== ====================
// ==================== ==================== ==================== ====================
const fnClickChk = (e) => {
	const qCell = e.target.parentElement;	/* 클릭한 버튼 */
	const qRow	= qCell.parentElement;		/* 버튼이 위치하는 Row */
	const qMain = qRow.parentElement;		/* Row가 위치하는 질문 */
	const idx = qMain.classList[1];			/* 해당 질문의 순번 */
	const img = 'public/check';


	// Define Side Value.
	const isPos = qCell.dataset.title == 'positive';
	const pttl = isPos ? 'positive' : 'negative';
	const pSrc = isPos ? '_best' : '_wrst';
	const oIdx = isPos ? 2 : 0;


	// When Oppoiste Check Box is Checked Return.
	if (qRow.children[oIdx].dataset.value == 'Y') {
		qCell.children[0].style.animation = 'impossible 0.5s ease-in';
		setTimeout(() => {qCell.children[0].style.animation= '';}, 500);
		return;
	}

      
	// Initialize One Side Value N.
	Array.from(document.querySelectorAll('.' + idx + ' [data-title=' + pttl + ']')).forEach(cell => {
		cell.children[0].setAttribute('src', img + '.png');
		cell.setAttribute('data-value', 'N');
		cell.classList.add('opcty');
	});


	// Set Click Data of Tag
	qCell.children[0].setAttribute('src', img + pSrc + '.png');
	qCell.setAttribute('data-value', 'Y');
	qCell.classList.remove('opcty');


	// Set Background Color & Progress & Percentage Value
	if (document.querySelectorAll('.' + idx + ' [data-value=Y]').length == 2 && Array.from(qMain.classList).indexOf('done') == -1) {
		const percnt = document.getElementById('percentage');
		const filler = document.getElementById('filler');
		this.global.qDone++

		const pValue = Math.round( this.global.qDone / 28 * 100);
		qMain.style.backgroundColor = 'hsla(127, 86%, 72%, .2)';
		filler.style.width = pValue + '%';
		percnt.innerHTML = pValue + '%';
		qMain.classList.add('done');
	}
}




const fnQuestEnd = (test) => {
	// Find No Answer Question
	if (this.global.qDone != 28 && test == undefined) {
		const qList = document.querySelectorAll('.question:not(.done, .example)');
		qList.forEach(q => q.style.backgroundColor = 'hsla(0, 100%, 70%, .2)');

		qList[0].scrollIntoView({
			behavior: "smooth",
			block: "center"
		});

		return false;
	}


	// Define Answer Value
	const answer = { 'D': 0, 'I': 0, 'S': 0, 'C': 0, 'N': 0 };
	const score  = { 'D': 0, 'I': 0, 'S': 0, 'C': 0 };


	// Calculate DISC Grade
	Array.from(document.querySelectorAll('.done')).forEach((quest, idx) => {
		const query = '.' + quest.classList[1] + ' .q-cell:not(.q-head, .q-mid)';
		Array.from(document.querySelectorAll(query)).forEach( (cell, jdx) => {
			if (cell.dataset.value == 'Y') {
				const kdx = Math.floor(jdx / 2);
				const title = cell.dataset.title;
				if (title == 'positive') { answer[this.global.questions[idx][kdx][1]]++ }
				if (title == 'negative') { answer[this.global.questions[idx][kdx][2]]-- }
			}
		})
	});

	
	// Randomize Answer Value When Testing.
	if (test != undefined) {
		this.global.questions.forEach(quest => {
			const indexArr = [0, 1, 2, 3];
			answer[quest[indexArr.splice(Math.floor(Math.random() * 4), 1)][1]]++;
			answer[quest[indexArr.splice(Math.floor(Math.random() * 3), 1)][2]]--;
		});
	}
	

	// Set DISC Grade
	this.global.grades.forEach((grade, i) => {
		const type = ['D', 'I', 'S', 'C'];
		grade.forEach((range, j) => {
			if (range != null && (range[0] <= answer[type[j]] && answer[type[j]] <= range[1]) ) {
				score[type[j]] = (i+1);
			}
		}) 
	});


	// Sort Grade
	const scArr = []; Object.keys(score).forEach(key => { scArr.push([key, score[key]]) }); 
	const result = scArr.sort((a, b) => b[1] - a[1]);
	

	// 결과가 DIS | DIC | SIC | DSC 중에 하나일 경우 분기.
	// 마지막 세 번째 글자가 20% 이상일 경우 세 글자 유형으로 처리.
	const tRes = result[0][0] + result[1][0] + result[2][0];
	if (['DIS', 'DIC', 'SIC' , 'DSC'].indexOf(tRes) != -1) {
		if (result[2][1] / (result[0][1] + result[1][1] + result[2][1]) >= 0.2) {
			this.global.result = tRes;
		}
	
	} else this.global.result = result[0][0] + result[1][0];


	alert(this.global.result);
}