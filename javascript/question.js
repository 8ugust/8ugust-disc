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
}