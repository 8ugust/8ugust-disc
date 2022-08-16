import React from 'react';
import styles from './index.module.css';
import div_bottom_2 from '../../img/div_bottom_2.png';
import Questions from '../questions';
import time from '../../img/time.png';
import check from '../../img/check.png';
import brain from '../../img/brain.png';

function Test(props) {

    const [answer_1, setAnswer_1] = React.useState([null, null]);
    const [answer_2, setAnswer_2] = React.useState([null, null]);
    const [answer_3, setAnswer_3] = React.useState([null, null]);
    const [answer_4, setAnswer_4] = React.useState([null, null]);
    const [answer_5, setAnswer_5] = React.useState([null, null]);
    const [answer_6, setAnswer_6] = React.useState([null, null]);
    const [answer_7, setAnswer_7] = React.useState([null, null]);
    const [answer_8, setAnswer_8] = React.useState([null, null]);
    const [answer_9, setAnswer_9] = React.useState([null, null]);
    const [answer_10, setAnswer_10] = React.useState([null, null]);
    const [answer_11, setAnswer_11] = React.useState([null, null]);
    const [answer_12, setAnswer_12] = React.useState([null, null]);
    const [answer_13, setAnswer_13] = React.useState([null, null]);
    const [answer_14, setAnswer_14] = React.useState([null, null]);
    const [answer_15, setAnswer_15] = React.useState([null, null]);
    const [answer_16, setAnswer_16] = React.useState([null, null]);
    const [answer_17, setAnswer_17] = React.useState([null, null]);
    const [answer_18, setAnswer_18] = React.useState([null, null]);
    const [answer_19, setAnswer_19] = React.useState([null, null]);
    const [answer_20, setAnswer_20] = React.useState([null, null]);
    const [answer_21, setAnswer_21] = React.useState([null, null]);
    const [answer_22, setAnswer_22] = React.useState([null, null]);
    const [answer_23, setAnswer_23] = React.useState([null, null]);
    const [answer_24, setAnswer_24] = React.useState([null, null]);
    const [answer_25, setAnswer_25] = React.useState([null, null]);
    const [answer_26, setAnswer_26] = React.useState([null, null]);
    const [answer_27, setAnswer_27] = React.useState([null, null]);
    const [answer_28, setAnswer_28] = React.useState([null, null]);

    // Scroll Hook
    const useMoveScroll = () => {
        const element = React.useRef();
        const onMoveToElement = () => {
            element.current.scrollIntoView({behavior:'smooth', block:'start'});
        };

        return {element, onMoveToElement};
    }

    // Answer
    const answer = [
        [answer_1, setAnswer_1, useMoveScroll()], [answer_2, setAnswer_2, useMoveScroll()], [answer_3, setAnswer_3, useMoveScroll()], 
        [answer_4, setAnswer_4, useMoveScroll()], [answer_5, setAnswer_5, useMoveScroll()], [answer_6, setAnswer_6, useMoveScroll()], 
        [answer_7, setAnswer_7, useMoveScroll()], [answer_8, setAnswer_8, useMoveScroll()], [answer_9, setAnswer_9, useMoveScroll()], 
        [answer_10, setAnswer_10, useMoveScroll()], [answer_11, setAnswer_11, useMoveScroll()], [answer_12, setAnswer_12, useMoveScroll()], 
        [answer_13, setAnswer_13, useMoveScroll()], [answer_14, setAnswer_14, useMoveScroll()], [answer_15, setAnswer_15, useMoveScroll()], 
        [answer_16, setAnswer_16, useMoveScroll()], [answer_17, setAnswer_17, useMoveScroll()], [answer_18, setAnswer_18, useMoveScroll()], 
        [answer_19, setAnswer_19, useMoveScroll()], [answer_20, setAnswer_20, useMoveScroll()], [answer_21, setAnswer_21, useMoveScroll()], 
        [answer_22, setAnswer_22, useMoveScroll()], [answer_23, setAnswer_23, useMoveScroll()], [answer_24, setAnswer_24, useMoveScroll()], 
        [answer_25, setAnswer_25, useMoveScroll()], [answer_26, setAnswer_26, useMoveScroll()], [answer_27, setAnswer_27, useMoveScroll()], 
        [answer_28, setAnswer_28, useMoveScroll()]
    ];

    // Percentage
    const [percent, setPercent] = React.useState(0);

    // Check Empty Question And Test End
    const fnQuestEnd = () => {
        var move = [];
        var count = 0;
        var isEmpty = false;
        answer.forEach((item, idx) => {
            if (item[0][0] === null || item[0][1] === null) {
                isEmpty = true;
                move.push(idx);
                count += 1;
            }
        })

        if (isEmpty === true) {
            alert(count + "개의 항목에 답변이 되지 않았습니다.\n모든 항목에 답변 하십시오.");
            if (move[0] !== 0) answer[move[0]-1][2].onMoveToElement();
            if (move[0] === 0) answer[move[0]][2].onMoveToElement();
            return false;
        }

        props.setBefCalAnswer(answer);
        props.setStatus(2);
        props.fnIsWait();
        return true;
    }

    return (
        <>
        <div className={props.status === 1 ? styles.test_wrap_show : styles.test_wrap_hide}>
            <div className={styles.discript_wrap}>
                <h1>DISC 행동유형검사</h1>
                <p>Personality Behavior Type</p>
                <div className={styles.how_wrap}>
                    <div className={styles.how}>
                        <div className={styles.how_inner}>
                            <img src={time} alt='time'/>
                            <p>총 28개 문항으로 구성되어 있으며 소요 시간은 10분 내외입니다.</p>
                        </div>
                    </div>
                    <div className={styles.how}>
                        <div className={styles.how_inner}>
                            <img src={check} alt='check'/>
                            <p>각 문항별로 적합에서 선택지 하나, 부적합에서 선택지 하나를 고르십시오.</p>
                        </div>
                    </div>
                    <div className={styles.how}>
                        <div className={styles.how_inner}>
                            <img src={brain} alt='brain'/>
                            <p>본인과 가장 잘 어울리는 단어를 적합으로, 그렇지 않은 단어를 부적합으로 고르시면 됩니다.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={div_bottom_2} className={styles.div_bottom_2} alt='div_bottom_2'/>
            <div className={styles.quest_div}>
                {props.questions.map((item, i) => {
                    return (<Questions key={i} idx={i} questions={item} answer={answer} setPercent={setPercent}/>)
                })}
            </div>
            <div className={styles.quest_end_wrap}>
                <div className={styles.quest_end_btn} onClick={fnQuestEnd}>검사 결과</div>
            </div>
            <div className={styles.progress_wrap}>
                <div className={styles.percentage}>{percent}%</div>
                <div className={styles.preogress_bar}>
                    <div className={styles.filler} style={{width: percent+'%'}}></div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Test;