// ==================== ==================== ==================== ====================
// Check Btn Click Event =================== ==================== ====================
// ==================== ==================== ==================== ====================
const fnClickChk = (e) => {
	// Define Essential Parent Tag.
	const qCell = e.target.parentElement;
	const qRow	= qCell.parentElement;
	const qMain = qRow.parentElement;
	const idx = qMain.classList[1];
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
	if (document.querySelectorAll('.' + idx + ' [data-value=Y]').length == 2) {
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




const fnQuestEnd = () => {
	// Find No Answer Question
	if (this.global.qDone != 28) {
		const qList = document.querySelectorAll('.question:not(.done, .example)');
		qList.forEach(q => q.style.backgroundColor = 'hsla(0, 100%, 70%, .2)');

		qList[0].scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});

		return false;
	}

	// Calculate DISC Grade
	Array.from(document.querySelectorAll('.done')).forEach((quest, idx) => {
		const query = '.' + quest.classList[1] + ' .q-cell:not(.q-head, .q-mid)';
		Array.from(document.querySelectorAll(query)).forEach( (cell, jdx) => {
			if (cell.dataset.value == 'Y') {
				const kdx = Math.floor(jdx / 2);
				const title = cell.dataset.title;
				if (title == 'positive') { this.global.answer[this.global.questions[idx][kdx][1]]++ }
				if (title == 'negative') { this.global.answer[this.global.questions[idx][kdx][2]]++ }
			}
		})
	});

	console.log(this.global.answer);
}