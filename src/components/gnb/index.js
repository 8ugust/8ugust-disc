import exit from '../../img/exit.png';
import styles from './index.module.css';

function Gnb(props) {
    const onClickFn = (status) => {
        props.setStatus(status);
        props.fnIsWait();
        props.fnIsGnb();
    }

    const tempTest = () => {
        const testArr = new Array(28).fill([[null, null]]);
        testArr.forEach(item => {
            item[0][0] = Math.ceil(Math.random()*4) - 1;
            item[0][1] = Math.ceil(Math.random()*4) - 1;
        })

        props.setBefCalAnswer(testArr);
        props.setStatus(2);
        props.fnIsWait();
        props.fnIsGnb();
    }

    return (
        <>
        <div className={props.isGnb ? styles.gnb_menu_active : styles.gnb_menu_hidden}>
            <div className={styles.gnb_background} onClick={props.fnIsGnb}></div>
            <div className={styles.gnb_body}>
                <div className={styles.gnb_body_header}>
                    <img src={exit} className={styles.gnb_exit} onClick={props.fnIsGnb} alt='exit_button'></img>
                </div>
                <div className={styles.gnb_wrap}>
                    <li className={props.status === 1 ? styles.gnb_select : styles.gnb_list} onClick={() => onClickFn(1)}>검사하기</li>
                    <li className={props.status === 4 ? styles.gnb_select : styles.gnb_list} onClick={() => onClickFn(4)}>DISC 란</li>
                    <li className={styles.gnb_list} onClick={() => tempTest()}>Test</li>
                </div>
                <div className={styles.gnb_footer}>8ugust</div>
            </div>
        </div>
        </>
    );
}

export default Gnb;