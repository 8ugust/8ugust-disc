import styles from './index.module.css';
import chk_none from '../../img/check.png';
import chk_best from '../../img/check_best.png';
import chk_wrst from '../../img/check_wrst.png';

function Questions (props) {

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
                            <div className={styles.col_1}><img src={chk_none} alt='chk_best'/></div>
                            <div className={styles.col_2}>{item[0]}</div>
                            <div className={styles.col_3}><img src={chk_none} alt='chk_best' /></div>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    );
}

export default Questions;