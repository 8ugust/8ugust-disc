import exit from '../../img/exit.png';
import styles from './index.module.css';

function Gnb(props) {
    const onClickTest = () => {
        props.setStatus(1);
        props.fnIsGnb();
    }

    const onClickDef = () => {
        props.setStatus(3);
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
                    <li className={styles.gnb_frst} onClick={onClickTest}>검사하기</li>
                    <li className={styles.gnb_list} onClick={onClickDef}>DISC 란</li>
                </div>
                <div className={styles.gnb_footer}>8ugust</div>
            </div>
        </div>
        </>
    );
}

export default Gnb;