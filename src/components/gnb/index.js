import exit from '../../img/exit.png';
import styles from './index.module.css';

function Gnb(props) {
    const onClickFn = (status) => {
        props.setStatus(status);
        props.fnIsWait();
        props.fnIsGnb();
    }

    const onClickTypeFn = (type) => {
        props.setTypes(type);
        props.setStatus(3);
        props.fnIsWait();
        props.fnIsGnb();
    }

    const tempTest = () => {
        const testArr = [];
        while (true) {
            const temp = [];
            temp.push(Math.ceil(Math.random()*4) - 1);
            temp.push(Math.ceil(Math.random()*4) - 1);

            testArr.push([temp]);
            if (testArr.length === 28) break;
        }

        props.setBefCalAnswer(testArr);
        props.setStatus(2);
        props.fnIsWait();
        props.fnIsGnb();
    }

    const test = false;
    

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
                    <li className={styles.gnb_list_type}>DISC 유형</li>
                    <div style={{paddingLeft:'20px'}}>
                        <li className={props.status === 3 && props.types === 'D1' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn('D1')}>결과지향자</li>
                        <li className={props.status === 3 && props.types === 'D2' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn('D2')}>성취자</li>
                        <li className={props.status === 3 && props.types === 'D3' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn('D3')}>개척가</li>
                        <li className={props.status === 3 && props.types === 'I1' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn('I1')}>정치가</li>
                        <li className={props.status === 3 && props.types === 'I2' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn('I2')}>헌신자</li>
                        <li className={props.status === 3 && props.types === 'I3' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn('I3')}>협상가</li>
                        <li className={props.status === 3 && props.types === 'S1' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn('S1')}>디자이너</li>
                        <li className={props.status === 3 && props.types === 'S2' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn('S2')}>상담가</li>
                        <li className={props.status === 3 && props.types === 'S3' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn('S3')}>관리자</li>
                        <li className={props.status === 3 && props.types === 'C1' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn('C1')}>설계자</li>
                        <li className={props.status === 3 && props.types === 'C2' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn('C2')}>작가</li>
                        <li className={props.status === 3 && props.types === 'C3' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn('C3')}>원칙주의자</li>
                        <li style={{marginBottom:'50px'}}></li>
                    </div>
                    {test === true ? <li className={styles.gnb_list} onClick={() => tempTest()}>Test</li> : null}
                </div>
            </div>
        </div>
        </>
    );
}

export default Gnb;