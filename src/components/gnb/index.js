import exit from '../../img/exit.png';
import styles from './index.module.css';

function Gnb(props) {
    const onClickFn = (status) => {
        props.setStatus(status);
        props.fnIsWait();
        props.fnIsGnb();
    }

    const onClickTypeFn = (param) => {
        props.setTypes(param);
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
                        <li className={props.status === 3 && props.types[0] === 'D_1' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn(['D_1', ['DISC', 'DICS'], '결과지향자'])}>결과지향자</li>
                        <li className={props.status === 3 && props.types[0] === 'D_2' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn(['D_2', ['DSCI', 'DSIC'], '성취자'])}>성취자</li>
                        <li className={props.status === 3 && props.types[0] === 'D_3' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn(['D_3', ['DCIS', 'DCSI'], '개척가'])}>개척가</li>
                        <li className={props.status === 3 && props.types[0] === 'I_1' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn(['I_1', ['IDSC', 'IDCS'], '정치가'])}>정치가</li>
                        <li className={props.status === 3 && props.types[0] === 'I_2' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn(['I_2', ['ISDC', 'ISCD'], '헌신자'])}>헌신자</li>
                        <li className={props.status === 3 && props.types[0] === 'I_3' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn(['I_3', ['ICDS', 'ICSD'], '협상가'])}>협상가</li>
                        <li className={props.status === 3 && props.types[0] === 'S_1' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn(['S_1', ['SDCI', 'SDIC'], '디자이너'])}>디자이너</li>
                        <li className={props.status === 3 && props.types[0] === 'S_2' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn(['S_2', ['SICD', 'SIDC'], '상담가'])}>상담가</li>
                        <li className={props.status === 3 && props.types[0] === 'S_3' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn(['S_3', ['SCID', 'SCDI'], '관리자'])}>관리자</li>
                        <li className={props.status === 3 && props.types[0] === 'C_1' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn(['C_1', ['CDSI', 'CDIS'], '설계자'])}>설계자</li>
                        <li className={props.status === 3 && props.types[0] === 'C_2' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn(['C_2', ['CISD', 'CIDS'], '작가'])}>작가</li>
                        <li className={props.status === 3 && props.types[0] === 'C_3' ? styles.gnb_select : styles.gnb_list} onClick={() => onClickTypeFn(['C_3', ['CSDI', 'CSID'], '원칙주의자'])}>원칙주의자</li>
                        <div style={{marginBottom:'50px'}}></div>
                    </div>
                    {test === true ? <li className={styles.gnb_list} onClick={() => tempTest()}>Test</li> : null}
                </div>
            </div>
        </div>
        </>
    );
}

export default Gnb;