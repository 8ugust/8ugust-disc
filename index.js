document.addEventListener("DOMContentLoaded", () => {

	fnSetSvgWidth();
});


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