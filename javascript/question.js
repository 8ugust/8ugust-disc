// ==================== ==================== ==================== ====================
// Check Btn Click Event =================== ==================== ====================
// ==================== ==================== ==================== ====================
const fnClickChk = (e) => {
	// =============== =============== ===============
	// Get Parent ==== =============== ===============
	const qCell = e.target.parentElement;
	const qRow	= qCell.parentElement;
	const qMain = qRow.parentElement;
	const idx = qMain.classList[1];
	const img = 'public/check';


	// Check Validation
	const opposite = qCell.dataset.title == 'positive' ? 'negative' : 'positive';
	


	// =============== =============== ===============
	// Initiative Data Value ========= ===============
	const cName = (qCell.dataset.title == 'positive') ? ' [data-title=positive]' : ' [data-title=negative]';
	Array.from(document.querySelectorAll('.' + idx + cName)).forEach(cell => {
		cell.children[0].setAttribute('src', img + '.png');
		cell.setAttribute('data-value', 'N');
		cell.classList.add('opcty');
	});


	// =============== =============== ===============
	// Set Click Data of Tag ========= ===============
	const cSrc = (qCell.dataset.title == 'positive') ? '_best' : '_wrst';
	qCell.children[0].setAttribute('src', img + cSrc + '.png');
	qCell.setAttribute('data-value', 'Y');
	qCell.classList.remove('opcty');
}