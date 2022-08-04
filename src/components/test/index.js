import styles from './index.module.css';
import div_bottom_2 from '../../img/div_bottom_2.png';
import time from '../../img/time.png';
import check from '../../img/check.png';
import brain from '../../img/brain.png';

function Test(props) {

    return (
        <>
        <div className={props.status === 1 ? styles.test_wrap_show : styles.test_wrap_hide}>
            <div className={styles.discript_wrap}>
                <h1>DISC 행동유형검사</h1>
                <p>Personality Behavior Type</p>
                <hr />
                <div className={styles.how_wrap}>
                    <div className={styles.how}>
                        <div className={styles.how_inner}>
                            <img src={time} alt='time'/>
                            <p>소요 검사 시간은 15분 내외입니다.</p>
                        </div>
                    </div>
                    <div className={styles.how}>
                        <div className={styles.how_inner}>
                            <img src={check} alt='check'/>
                            <p>선택지 중 본인과 가장 잘 어울리는 것과 그렇지 않은 것을 고르십시오.</p>
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
        </div>
        </>
    );
}

export default Test;