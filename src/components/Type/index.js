import React from 'react';
import styles from './index.module.css';

function Type(props) {

	const fnStyles = (param) => {
		if (props.types[0] === null) return false;
		const powerful = props.types[0].split('')[0];

		if (param === 'color') {
			if (powerful === 'D') return '#FF6565';
			if (powerful === 'I') return '#ECC774';
			if (powerful === 'S') return '#93ADDD';
			if (powerful === 'C') return '#8DE389';
		}

		if (param === 'powerful') {
			if (powerful === 'D') return '주도성(Dominance)';
			if (powerful === 'I') return '사교성(Influence)';
			if (powerful === 'S') return '안정성(Steadiness)';
			if (powerful === 'C') return '신중성(Compliance)';
		}

		if (param === 'powerful_desc_1') {
			if (powerful === 'D') return props.behaviorType.D[0];
			if (powerful === 'I') return props.behaviorType.I[0];
			if (powerful === 'S') return props.behaviorType.S[0];
			if (powerful === 'C') return props.behaviorType.C[0];
		}

		if (param === 'powerful_desc_2') {
			if (powerful === 'D') return props.behaviorType.D[1];
			if (powerful === 'I') return props.behaviorType.I[1];
			if (powerful === 'S') return props.behaviorType.S[1];
			if (powerful === 'C') return props.behaviorType.C[1];
		}

		if (param === 'powerful_desc_3') {
			if (powerful === 'D') return props.behaviorType.D[2];
			if (powerful === 'I') return props.behaviorType.I[2];
			if (powerful === 'S') return props.behaviorType.S[2];
			if (powerful === 'C') return props.behaviorType.C[2];
		}

	}

    return (
        <div> 
        <div className={props.status === 3 ? styles.result_wrap_show : styles.result_wrap_hide}>
			<div className={styles.result_type_wrap}>
				<div className={styles.caption}>행동 유형 :</div>
				<div className={styles.type_nm}>{props.types[0] !== null ? props.types[2] : '타입명'}</div>
				<div className={styles.type_cd} style={{color:fnStyles('color')}}>{props.types[0] !== null ? props.types[1].join(' / ') : 'CODE'}</div>
			</div>
			<div style={{width:'100%', paddingTop:'30px'}}>
				<div className={styles.result_desc_inner}>
					<div className={styles.type_cd} style={{fontSize:'1.4em'}}>행동강점 : {fnStyles('powerful')}</div>
					<div style={{paddingTop:'10px', paddingBottom:'10px'}}>
						<p style={{borderLeft:'3px solid ' + fnStyles('color'), paddingLeft:'20px'}}>{fnStyles('powerful_desc_1')}</p>
					</div>
					<p style={{margin:0, paddingBottom:'30px'}}>{fnStyles('powerful_desc_2')}</p>
					<p style={{margin:0, paddingBottom:'30px'}}>{fnStyles('powerful_desc_3')}</p>
					<div className={styles.type_cd} style={{fontSize:'1.4em', paddingTop:'20px', paddingBottom:'20px'}}>행동패턴 : {props.types[2]}</div>
					<div className={styles.result_desc_middle} style={{backgroundColor:fnStyles('color')}}>{props.types[0] !== null ? props.behaviorType[props.types[2]][0] : null}</div>
					<p style={{margin:0, paddingBottom:'30px'}}>{props.types[0] !== null ? props.behaviorType[props.types[2]][1] : null}</p>
					<p style={{margin:0, paddingBottom:'30px'}}>{props.types[0] !== null ? props.behaviorType[props.types[2]][2] : null}</p>
					<p style={{margin:0, paddingBottom:'30px'}}>{props.types[0] !== null ? props.behaviorType[props.types[2]][3] : null}</p>
				</div>
			</div>
        </div>
        </div> 
    );
}

export default Type;