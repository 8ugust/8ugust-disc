import React from 'react';
import styles from './index.module.css';

function Result(props) {
    
	const [calControl_1, setcalControl_1] = React.useState(true);
	const [calControl_2, setcalControl_2] = React.useState(true);
	const [discTypeNm, setDiscTypeNm] = React.useState('타입명');
	const [discTypeCd, setDiscTypeCd] = React.useState('CODE');
	const [result, setResult] = React.useState({});

    if (props.status === 2 && calControl_1 === true) {
		const inner = {
			'Best':{'D':0, 'I':0, 'S':0, 'C':0, 'N':0},
			'Wrst':{'D':0, 'I':0, 'S':0, 'C':0, 'N':0},
			'Result':{'D':0, 'I':0, 'S':0, 'C':0},
			'Score' : []
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
		
		// DISC Score
		const score = [];
		const division_1 = [
			[[27, 6], [5, 0], [-1, -4], [-5, -7], [-8, -11], [-12, -14], [-15, -27]],
			[[28, 8], [7, 6], [5, 3], [2, 1], [0, -2], [-3, -5], [-6, -26]],
			[[26, 12], [11, 9], [8, 6], [5, 3], [2, 0], [-1, -4], [-5, -27]],
			[[24, 16], [15, 3], [2, 0], [-1, -2], [-3, -5], [-6, -8], [-9, -26]]
		]; 
		division_1.forEach((item, idx) => {
			item.forEach((jtem, jdx) => {
				if (idx === 0 && (jtem[1] <= inner.Result.D && inner.Result.D <= jtem[0])) score.push(['D', 7-jdx, inner.Result.D]);
				if (idx === 1 && (jtem[1] <= inner.Result.I && inner.Result.I <= jtem[0])) score.push(['I', 7-jdx, inner.Result.I]);
				if (idx === 2 && (jtem[1] <= inner.Result.S && inner.Result.S <= jtem[0])) score.push(['S', 7-jdx, inner.Result.S]);
				if (idx === 3 && (jtem[1] <= inner.Result.C && inner.Result.C <= jtem[0])) score.push(['C', 7-jdx, inner.Result.C]);
			})
		}); 

		const division_2 = [
			[[27, 27], [28, 28], [26, 26], [24, 24]],			// 28
			[[18, 26], [10, 28], [14, 25], [18, 23]],			// 27
			[[9, 17], [9, 9], [13, 13], [17, 17]],				// 26
			[[6, 8], [8, 8], [12, 12], [16, 16]],				// 25
			[[4, 5], [7, 7], [11, 11], [5, 15]],				// 24
			[[2, 3], [null], [10, 10], [4, 4]],					// 23
			[[1, 1], [6, 6], [null], [null]],					// 22
			[[0, 0], [null], [9, 9], [3, 3]],					// 21
			[[-1, -1], [5, 5], [8, 8], [2, 2]],					// 20
			[[-3, -2], [4, 4], [7, 7], [1, 1]],					// 19
			[[-4, -4], [null], [null], [0, 0]],					// 18
			[[null], [3, 3], [6, 6], [null]],					// 17
			[[-5, -5], [null], [null], [-1, -1]],				// 16
			[[-6, -6], [2, 2], [4, 5], [null]],					// 15
			[[-7, -7], [1, 1], [3, 3], [-2, -2]],				// 14
			[[null], [null], [null], [null]],					// 13
			[[-8, -8], [-1, 0], [2, 2], [-3, -3]],				// 12
			[[-10, -9], [null], [1, 1], [-4, -4]],				// 11
			[[null], [-2, -2], [null], [-5, -5]],				// 10
			[[-11, -11], [null], [0, 0], [null]],				// 9
			[[-12, -12], [-3, -3], [-1, -1], [-6, -6]],			// 8
			[[-13, -13], [-4, -4], [-2, -2], [-7, -7]],			// 7
			[[-14, -14], [-5, -5], [-3, -3], [null]],			// 6
			[[null], [null], [-4, -4], [-8, -8]],				// 5
			[[null], [-6, -6], [-5, -5], [-9, -9]],				// 4
			[[-16, -15], [-8, -7], [-7, -6], [-11, -10]],		// 3
			[[-22, -17], [-18, -9], [-18, -8], [-20, -12]],		// 2
			[[-27, -23], [-26, -19], [-27, -19], [-26, -21]]	// 1
		];

		division_2.forEach((item, idx) => {
			item.forEach((jtem, jdx) => {
				if (jdx === 0 && (jtem[0] !== null) && (jtem[0] <= score[0][2] && score[0][2] <= jtem[1])) score[0].push(28-idx);	// D
				if (jdx === 1 && (jtem[0] !== null) && (jtem[0] <= score[1][2] && score[1][2] <= jtem[1])) score[1].push(28-idx);	// I
				if (jdx === 2 && (jtem[0] !== null) && (jtem[0] <= score[2][2] && score[2][2] <= jtem[1])) score[2].push(28-idx);	// S
				if (jdx === 3 && (jtem[0] !== null) && (jtem[0] <= score[3][2] && score[3][2] <= jtem[1])) score[3].push(28-idx);	// C
			})
		});
		
		
		inner.Score = score.sort((a, b) => {
			if (b[1] === a[1]) {return b[3] - a[3]}
			return b[1] - a[1]
		});

		setResult(inner);
		setcalControl_1(false);
    }

	if (calControl_1 === false && calControl_2 === true) {
		const type = {
			'결과지향자' : ['DISC', 'DICS'],
			'성취자' : ['DSCI', 'DSIC'],
			'개척가' : ['DCIS', 'DCSI'],

			'정치가' : ['IDSC', 'IDCS'],
			'헌신자' : ['ISDC', 'ISCD'],
			'협상가' : ['ICDS', 'ICSD'],
			
			'디자이너' : ['SDCI', 'SDIC'],
			'상담가' : ['SICD', 'SIDC'],
			'관리자' : ['SCID', 'SCDI'],
			
			'설계자' : ['CDSI', 'CDIS'],
			'작가': ['CISD', 'CIDS'],
			'원칙주의자' : ['CSDI', 'CSID']
		}

		const code = result.Score.map(item => item[0]).join('');
		Object.keys(type).forEach(item => {
			if (type[item].includes(code)) {
				setDiscTypeNm(item);
				setDiscTypeCd(code);
			}
		})

		setcalControl_2(false);
	}

	const fnTypeStyles = (type, data) => {
		if (Object.keys(result).length === 0) return null;
		const vScore = result.Score;

		if (type ==='behavior_1') {
			if (vScore[0][0] === 'D') return '주도성(Dominance)';
			if (vScore[0][0] === 'I') return '사교성(Influence)';
			if (vScore[0][0] === 'S') return '안정성(Steadiness)';
			if (vScore[0][0] === 'C') return '신중성(Compliance)';
		}

		if (type ==='behavior_2') {
			if (vScore[0][0] === 'D') return props.behaviorType.D[0];
			if (vScore[0][0] === 'I') return props.behaviorType.I[0];
			if (vScore[0][0] === 'S') return props.behaviorType.S[0];
			if (vScore[0][0] === 'C') return props.behaviorType.C[0];
		}

		if (type ==='behavior_3_1') {
			if (vScore[0][0] === 'D') return props.behaviorType.D[1];
			if (vScore[0][0] === 'I') return props.behaviorType.I[1];
			if (vScore[0][0] === 'S') return props.behaviorType.S[1];
			if (vScore[0][0] === 'C') return props.behaviorType.C[1];
		}

		if (type ==='behavior_3_2') {
			if (vScore[0][0] === 'D') return props.behaviorType.D[2];
			if (vScore[0][0] === 'I') return props.behaviorType.I[2];
			if (vScore[0][0] === 'S') return props.behaviorType.S[2];
			if (vScore[0][0] === 'C') return props.behaviorType.C[2];
		}

		if (type === 'color') {
			if (vScore[0][0] === 'D') return '#FF6565';
			if (vScore[0][0] === 'I') return '#ECC774';
			if (vScore[0][0] === 'S') return '#93ADDD';
			if (vScore[0][0] === 'C') return '#8DE389';
		}

		if (type === 'percent') {
			if (data >= 90) return (data-15) + '%';
			if (data >= 80) return (data-12) + '%';
			if (data >= 60) return (data-10) + '%';
			if (data >= 50) return (data-5) + '%';
			if (data >= 40) return (data-3) + '%';
			if (data >= 30) return (data-2) + '%';
			if (data >= 20) return (data+2) + '%';
			if (data >= 10) return (data+5) + '%';
			return (data+7) + '%';
		}
	}

    return (
        <>
        <div className={props.status === 2 ? styles.result_wrap_show : styles.result_wrap_hide}>
			<div className={styles.result_type_wrap}>
				<div className={styles.caption}>당신의 행동 유형은 :</div>
				<div className={styles.type_nm}>{discTypeNm}</div>
				<div className={styles.type_cd} style={{color:fnTypeStyles('color')}}>{discTypeCd}</div>
				<div className={styles.percent_wrap}>
					{window.innerWidth >= 500 ? null :
						<svg className={styles.percent_bg} viewBox='0 0 100 120'>
							<polygon style={{fill:fnTypeStyles('color')}} points='0,5 10,0 40,15 100,0 100,115 90,120 60,105 0,120'/>
						</svg>
					}
					<div className={styles.percent_div} style={window.innerWidth >= 500 ? {backgroundColor:fnTypeStyles('color')} : null}>
						<div className={styles.percent_div_inner}>
							{Object.keys(result).length !== 0 ? result.Score.map((item, idx) => {
								const idx_D = result.Score.map(item => item[0]).indexOf('D');
								const idx_I = result.Score.map(item => item[0]).indexOf('I');
								const idx_S = result.Score.map(item => item[0]).indexOf('S');
								const idx_C = result.Score.map(item => item[0]).indexOf('C');
								const caption_arr = [null, null, null];

								if (idx === 0) {caption_arr[0] = '주도성 (Dominance)'; caption_arr[1] = Math.round(result.Score[idx_D][3]/28*100, 0); caption_arr[2]= '#FF6565';}
								if (idx === 1) {caption_arr[0] = '사교성 (Influence)'; caption_arr[1] = Math.round(result.Score[idx_I][3]/28*100, 0); caption_arr[2]= '#ECC774';}
								if (idx === 2) {caption_arr[0] = '안정성 (Steadiness)'; caption_arr[1] = Math.round(result.Score[idx_S][3]/28*100, 0); caption_arr[2]= '#93ADDD';}
								if (idx === 3) {caption_arr[0] = '신중성 (Compliance)'; caption_arr[1] = Math.round(result.Score[idx_C][3]/28*100, 0); caption_arr[2]= '#8DE389';}

								return (
									<div key={idx}>
										<div className={idx !== 3 ? styles.percent_content_y : styles.percent_content_n}>
											<div className={styles.percent_caption}>{caption_arr[0]}</div>
											<div className={styles.percent_bar_warp}>
												<div className={styles.percentage}>0</div>
												<div className={styles.percent_bar}>
													<div style={{width:caption_arr[1]+'%', backgroundColor:caption_arr[2]}}></div>
												</div>
												<div className={styles.percentage}>100</div>
											</div>
											<div style={{color:caption_arr[2], paddingLeft:fnTypeStyles('percent', caption_arr[1]), fontWeight:600, fontSize:'0.8em'}}>{caption_arr[1]}%</div>
										</div>
									</div>
								);
							}) : null}
						</div>
					</div>
				</div>
			</div>
			{Object.keys(result).length === 0 ? null : <div className={styles.result_desc_wrap}>
				<div className={styles.result_desc_inner}>
					<div className={styles.type_cd} style={{fontSize:'1.4em'}}>행동강점 : {fnTypeStyles('behavior_1')}</div>
					<div style={{paddingTop:'10px', paddingBottom:'10px'}}>
						<p style={{borderLeft:'3px solid ' + fnTypeStyles('color'), paddingLeft:'20px'}}>{fnTypeStyles('behavior_2')}</p>
					</div>
					<p style={{margin:0, paddingBottom:'30px'}}>{fnTypeStyles('behavior_3_1')}</p>
					<p style={{margin:0, paddingBottom:'30px'}}>{fnTypeStyles('behavior_3_2')}</p>
					<div className={styles.type_cd} style={{fontSize:'1.4em', paddingTop:'20px', paddingBottom:'20px'}}>행동패턴 : {discTypeNm} ({discTypeCd})</div>
					<div className={styles.result_desc_middle} style={{backgroundColor:fnTypeStyles('color')}}>{props.behaviorType[discTypeNm][0]}</div>
					<p style={{margin:0, paddingBottom:'30px'}}>{props.behaviorType[discTypeNm][1]}</p>
					<p style={{margin:0, paddingBottom:'30px'}}>{props.behaviorType[discTypeNm][2]}</p>
					<p style={{margin:0, paddingBottom:'30px'}}>{props.behaviorType[discTypeNm][3]}</p>
					<div style={{display:'flex', justifyContent:'center', paddingBottom:'30px'}}>
						<div className={styles.result_btn}>다시하기</div>
					</div>
				</div>
			</div>}
        </div>
        </>
    );
}

export default Result;