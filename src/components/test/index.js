import React from 'react';
import styles from './index.module.css';
import div_bottom_2 from '../../img/div_bottom_2.png';
import Questions from '../questions';
import time from '../../img/time.png';
import check from '../../img/check.png';
import brain from '../../img/brain.png';

function Test(props) {

    // Questions
    const questions = [
        [['열정적인', 'I', 'I'], ['대담한', 'D', 'D'], ['치밀한', 'C', 'C'], ['만족해하는', 'S', 'S']],
        [['신중한', 'C', 'C'], ['결단력 있는', 'D', 'D'], ['확신을 주는', 'I', 'I'], ['호의적인', 'S', 'N']],
        [['다정한', 'I', 'N'], ['정확한', 'C', 'C'], ['솔직하게 말하는', 'D', 'D'], ['변화가 적은', 'N', 'S']],
        [['말하기 좋아하는', 'I', 'I'], ['자제력있는', 'C', 'C'], ['관습을 따르는', 'S', 'S'], ['결단력 있는', 'D', 'D']],
        [['도전하는', 'D', 'D'], ['통찰력있는', 'C', 'C'], ['사교적인', 'I', 'I'], ['온건한', 'S', 'S']],
        [['온화한', 'S', 'S'], ['설득력있는', 'I', 'N'], ['겸손한', 'N', 'C'], ['독창적 아이디어 내는', 'N', 'D']],
        [['표현력있는', 'I', 'I'], ['조심성있는', 'C', 'C'], ['주도적인', 'D', 'D'], ['민감히 반응하는', 'N', 'S']],
        [['호의적인', 'I', 'I'], ['세심한', 'C', 'N'], ['겸손한', 'S', 'S'], ['참을성이 적은', 'D', 'D']],
        [['사려깊은', 'C', 'C'], ['남 의견에 잘 동의하는', 'C', 'C'], ['매력적인', 'I', 'I'], ['확고한', 'D', 'D']],
        [['용감한', 'D', 'D'], ['격려하는', 'I', 'I'], ['순응하는', 'S', 'S'], ['수줍어하는', 'N', 'C']],
        [['내성적인', 'C', 'C'], ['호의적인', 'S', 'S'], ['의지가 강한', 'D', 'D'], ['명량한', 'I', 'I']],
        [['남을 격려하는', 'I', 'I'], ['친절한', 'S', 'S'], ['주의깊은', 'C', 'C'], ['독림심 강한', 'D', 'D']],
        [['경쟁심있는', 'D', 'D'], ['생각이 깊은', 'S', 'S'], ['활발한', 'I', 'I'], ['자신을 잘 드러내지 않는', 'C', 'C']],
        [['세밀한', 'C', 'C'], ['유순한', 'S', 'S'], ['완고한', 'D', 'D'], ['놀기 좋아하는', 'I', 'I']],
        [['사람에게 호감을 주는', 'I', 'I'], ['생각이 깊은', 'C', 'N'], ['의지가 굳은', 'D', 'D'], ['일관되게 행동하는', 'S', 'S']],
        [['논리적인', 'C', 'C'], ['과감한', 'D', 'D'], ['충실한', 'S', 'S'], ['인기있는', 'I', 'I']],
        [['사교적인', 'I', 'I'], ['참을성있는', 'S', 'S'], ['자신감있는', 'D', 'D'], ['말씨가 부드러운', 'C', 'C']],
        [['의존적인', 'S', 'S'], ['의욕적인', 'D', 'N'], ['철저한', 'C', 'C'], ['활기있는', 'I', 'I']],
        [['의욕적인', 'D', 'D'], ['외향적인', 'I', 'I'], ['친근한', 'S', 'S'], ['갈등을 피하는', 'N', 'C']],
        [['유머가 있는', 'I', 'I'], ['이해심있는', 'S', 'S'], ['공평한', 'N', 'C'], ['단호한', 'D', 'D']],
        [['자제력있는', 'C', 'C'], ['관대한', 'S', 'S'], ['활기있는', 'I', 'I'], ['고집스런', 'D', 'D']],
        [['재치있는', 'I', 'I'], ['내향적인', 'C', 'C'], ['강인한', 'D', 'D'], ['쉽게 화내지않는', 'S', 'S']],
        [['남과 잘 어울리는', 'I', 'I'], ['점잖은', 'C', 'C'], ['활기찬', 'D', 'D'], ['너그러운', 'S', 'S']],
        [['매력있는', 'I', 'I'], ['흡족해하는', 'S', 'S'], ['지시하는', 'D', 'D'], ['양보하는', 'C', 'C']],
        [['자기주장을 하는', 'D', 'D'], ['체계적인', 'C', 'C'], ['협력적인', 'S', 'S'], ['즐거운', 'I', 'I']],
        [['유쾌한', 'I', 'I'], ['정교한', 'C', 'C'], ['결과를 요구하는', 'D', 'D'], ['침착한', 'S', 'S']],
        [['변화를 추구하는', 'D', 'D'], ['우호적인', 'S', 'S'], ['호소력있는', 'I', 'I'], ['꼼꼼한', 'C', 'C']],
        [['공손한', 'C', 'C'], ['새롭게 시작하는', 'D', 'D'], ['낙천적인', 'I', 'I'], ['도움을 주려하는', 'S', 'S']]
    ];

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

    // Answer
    const answer = [
        [answer_1, setAnswer_1], [answer_2, setAnswer_2], [answer_3, setAnswer_3], [answer_4, setAnswer_4], [answer_5, setAnswer_5], 
        [answer_6, setAnswer_6], [answer_7, setAnswer_7], [answer_8, setAnswer_8], [answer_9, setAnswer_9], [answer_10, setAnswer_10], 
        [answer_11, setAnswer_11], [answer_12, setAnswer_12], [answer_13, setAnswer_13], [answer_14, setAnswer_14], [answer_15, setAnswer_15], [answer_16, setAnswer_16], 
        [answer_17, setAnswer_17], [answer_18, setAnswer_18], [answer_19, setAnswer_19], [answer_20, setAnswer_20], [answer_21, setAnswer_21], [answer_22, setAnswer_22], 
        [answer_23, setAnswer_23], [answer_24, setAnswer_24], [answer_25, setAnswer_25], [answer_26, setAnswer_26], [answer_27, setAnswer_27], [answer_28, setAnswer_28]
    ];

    // Percentage
    const [percent, setPercent] = React.useState(0);

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
                            <p>총 28개의 질문으로 구성되어 있으며 소요 시간은 15분 내외입니다.</p>
                        </div>
                    </div>
                    <div className={styles.how}>
                        <div className={styles.how_inner}>
                            <img src={check} alt='check'/>
                            <p>선택지 중 본인을 나타내기에 가장 적합하다고 느껴지는 것과 그렇지 않은 것을 고르십시오.</p>
                        </div>
                    </div>
                    <div className={styles.how}>
                        <div className={styles.how_inner}>
                            <img src={brain} alt='brain'/>
                            <p>선택지에 대한 생각이 적고 판단이 빠를수록 정확도가 상승합니다.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={div_bottom_2} className={styles.div_bottom_2} alt='div_bottom_2'/>
            <div className={styles.quest_div}>
                {questions.map((item, i) => {
                    return (<Questions key={i} idx={i} questions={item} answer={answer} setPercent={setPercent}/>)
                })}
            </div>
            <div className={styles.quest_end_wrap}>
                <div className={styles.quest_end_btn}>검사 결과</div>
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