import styles from './index.module.css';

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
                            <p>소요 검사 시간은 15분 내외입니다.</p>
                        </div>
                    </div>
                    <div className={styles.how}>
                        <div className={styles.how_inner}>
                            <p>선택지 중 본인과 가장 잘 어울리는 것과 그렇지 않은 것을 고르십시오.</p>
                        </div>
                    </div>
                    <div className={styles.how}>
                        <div className={styles.how_inner}>
                            <p>선택지에 대한 생각이 적고 판단이 빠를수록 정확도가 상승합니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Test;