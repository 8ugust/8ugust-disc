import React from 'react';
import styles from './index.module.css';
import chk_none from '../../img/check.png';
import chk_best from '../../img/check_best.png';
import chk_wrst from '../../img/check_wrst.png';

function Questions (props) {
    const chkSrc = (chk, jdx) => {
        var v_chk = null;
        for (var i=0; i<props.answer.length; i++) {
            if (i === jdx) {
                if (chk === 'B') v_chk = props.answer[i][0];
                if (chk === 'W') v_chk = props.answer[i][1];
                break;
            }
        }

        if (v_chk === null) return chk_none;
        if (v_chk !== jdx) return chk_none;
        if (v_chk === jdx) {
            if (chk === 'B') return chk_best;
            if (chk === 'W') return chk_wrst;
        }
    }

    return (
        <>
        <div className={styles.quest_wrap}>
            <div className={styles.quest_inner}>
                <div className={styles.quest_title}>
                    <div className={styles.col_1}>적합</div>
                    <div className={styles.col_2}></div>
                    <div className={styles.col_3}>비적합</div>
                </div>
                {props.questions.map((item, jdx) => {
                    return(
                        <div key={jdx} className={styles.quest_row}>
                            <div className={styles.col_1}><img src={chkSrc('B', jdx)} alt='chk_best' onClick={null} /></div>
                            <div className={styles.col_2}>{item[0]}</div>
                            <div className={styles.col_3}><img src={chkSrc('W', jdx)} alt='chk_best' onClick={null} /></div>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    );
}

export default Questions;