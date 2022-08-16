import React from 'react';
import styles from './index.module.css';

function Result(props) {

    return (
        <>
        <div className={props.status === 3 ? styles.result_wrap_show : styles.result_wrap_hide}>
			<div className={styles.result_type_wrap}>
				<div className={styles.caption}>당신의 행동 유형은 :</div>
				<div className={styles.type_nm}>{discTypeNm}</div>
				<div className={styles.type_cd} style={{color:fnTypeStyles('color')}}>{discTypeCd}</div>
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
				</div>
			</div>}
        </div>
        </>
    );
}

export default Result;