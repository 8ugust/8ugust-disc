import React from 'react';
import styles from './index.module.css';
import chk_none from '../../img/check.png';
import chk_best from '../../img/check_best.png';
import chk_wrst from '../../img/check_wrst.png';

function Questions (props) {
    // force reRender
    const [render, setRender] = React.useState([]);

    // Chnage IMG Src
    const setChk = (chk, idx, jdx) => {
        const newAnswer = props.answer[idx][0];
        if (chk === 'B') {
            if (newAnswer[1] === jdx) {
                return false;
            } newAnswer[0] = jdx;
        }

        if (chk === 'W') {
            if (newAnswer[0] === jdx) {
                return false;
            } newAnswer[1] = jdx;
        }

        props.answer[idx][1](newAnswer);
        setRender([...render]);
    }

    return (
        <>
        <div className={styles.quest_wrap}>
            <div className={(props.answer[props.idx][0][0] !== null && props.answer[props.idx][0][1] !== null) ? styles.quest_inner_done : styles.quest_inner}>
                <div className={styles.quest_title}>
                    <div className={styles.col_1}>적합</div>
                    <div className={styles.col_2}></div>
                    <div className={styles.col_3}>비적합</div>
                </div>
                {props.questions.map((item, jdx) => {
                    return(
                        <div key={jdx} className={styles.quest_row}>
                            <div className={styles.col_1}>
                                <img className={props.answer[props.idx][0][1] === jdx ? styles.no_select : null} src={props.answer[props.idx][0][0] === jdx ? chk_best : chk_none} alt='chk_best' onClick={() => setChk('B', props.idx, jdx)} />
                            </div>
                            <div className={styles.col_2}>{item[0]}</div>
                            <div className={styles.col_3}>
                                <img className={props.answer[props.idx][0][0] === jdx ? styles.no_select : null} src={props.answer[props.idx][0][1] === jdx ? chk_wrst : chk_none} alt='chk_wrst' onClick={() => setChk('W', props.idx, jdx)} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    );
}

export default Questions;