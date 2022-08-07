import React from 'react';
import styles from './index.module.css';
import div_top_D from '../../img/div_top_D.png';
import div_top_I from '../../img/div_top_I.png';
import div_top_S from '../../img/div_top_S.png';
import div_top_C from '../../img/div_top_C.png';
import div_bottom_D from '../../img/div_bottom_D.png';
import div_bottom_I from '../../img/div_bottom_I.png';
import div_bottom_S from '../../img/div_bottom_S.png';
import div_bottom_C from '../../img/div_bottom_C.png';

function Result(props) {
    
	const [calControl, setCalControl] = React.useState(true);
	const [result, setResult] = React.useState({});

    if (props.status === 2 && calControl === true) {
		const inner = {
			'Best':{'D':0, 'I':0, 'S':0, 'C':0, 'N':0},
			'Wrst':{'D':0, 'I':0, 'S':0, 'C':0, 'N':0},
			'Result':{'D':0, 'I':0, 'S':0, 'C':0},
			'Score' : [],
			'Type' : null
		};

        props.befCalAnswer.forEach((item, idx) => {
            props.questions[idx].forEach((jtem, jdx) => {
                if (jdx === item[0][0]) {
					if (jtem[1] === 'D') inner.Best.D += 1;
					if (jtem[1] === 'I') inner.Best.I += 1;
					if (jtem[1] === 'S') inner.Best.S += 1;
					if (jtem[1] === 'C') inner.Best.C += 1;
					if (jtem[1] === 'N') inner.Best.N += 1;
				}

                if (jdx === item[0][1]) {
					if (jtem[2] === 'D') inner.Wrst.D += 1;
					if (jtem[2] === 'I') inner.Wrst.I += 1;
					if (jtem[2] === 'S') inner.Wrst.S += 1;
					if (jtem[2] === 'C') inner.Wrst.C += 1;
					if (jtem[3] === 'N') inner.Wrst.N += 1;
				}
            })
        });

		inner.Result.D = inner.Best.D - inner.Wrst.D;
		inner.Result.I = inner.Best.I - inner.Wrst.I;
		inner.Result.S = inner.Best.S - inner.Wrst.S;
		inner.Result.C = inner.Best.C - inner.Wrst.C;
		
		// Calculate DISC Score
		const division = [
			[[27, 6], [5, 0], [-1, -4], [-5, -7], [-8, -11], [-12, -14], [-15, -27]],
			[[28, 8], [7, 6], [5, 3], [2, 1], [0, -2], [-3, -5], [-6, -26]],
			[[26, 12], [11, 9], [8, 6], [5, 3], [2, 0], [-1, -4], [-5, -27]],
			[[24, 16], [5, 3], [2, 0], [-1, -2], [-3, -5], [-6, -8], [-9, -26]]
		]; const score = [];
		division.forEach((item, idx) => {
			item.forEach((jtem, jdx) => {
				if (idx === 0 && (jtem[1] <= inner.Result.D && inner.Result.D <= jtem[0])) score.push(['D', jdx + 1]);
				if (idx === 1 && (jtem[1] <= inner.Result.I && inner.Result.I <= jtem[0])) score.push(['I', jdx + 1]);
				if (idx === 2 && (jtem[1] <= inner.Result.S && inner.Result.S <= jtem[0])) score.push(['S', jdx + 1]);
				if (idx === 3 && (jtem[1] <= inner.Result.C && inner.Result.C <= jtem[0])) score.push(['C', jdx + 1]);
			})
		})

		score.sort((a, b) => {return b[1] - a[1]});
		inner.Score = score;

		setResult(inner);
		setCalControl(false);
    }

	if (calControl === false) {
		
	}

	const fnTypeStyles = (type) => {
		if (Object.keys(result).length === 0) return null;
		const vScore = result.Score[0][0];

		if (type === 'img_top') {
			if (vScore === 'D') return div_top_D;
			if (vScore === 'I') return div_top_I;
			if (vScore === 'S') return div_top_S;
			if (vScore === 'C') return div_top_C;
		}

		if (type === 'img_mid') {
			if (vScore === 'D') return styles.percent_D;
			if (vScore === 'I') return styles.percent_I;
			if (vScore === 'S') return styles.percent_S;
			if (vScore === 'C') return styles.percent_C;
		}

		if (type === 'img_bot') {
			if (vScore === 'D') return div_bottom_D;
			if (vScore === 'I') return div_bottom_I;
			if (vScore === 'S') return div_bottom_S;
			if (vScore === 'C') return div_bottom_C;
		}

		// if (vScore === 'D') return styles.type_cd_D;
		// if (vScore === 'I') return styles.type_cd_I;
		// if (vScore === 'S') return styles.type_cd_S;
		// if (vScore === 'C') return styles.type_cd_C;
	}

    return (
        <>
        <div className={props.status === 2 ? styles.result_wrap_show : styles.result_wrap_hide}>
			<div className={styles.result_type_wrap}>
				<div className={styles.caption}>당신의 행동 유형은 :</div>
				<div className={styles.type_nm}>타입명</div>
				<div className={styles.type_cd}>CODE</div>
				<div className={styles.percent_wrap}>
					<img src={fnTypeStyles('img_top')} alt='img_top'/>
					<div className={fnTypeStyles('img_mid')}>

					</div>
					<img src={fnTypeStyles('img_bot')} alt='img_bot'/>
				</div>
			</div>
        </div>
        </>
    );
}

export default Result;