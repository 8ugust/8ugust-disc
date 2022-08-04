import styles from './index.module.css';
import def_img from '../../img/definition.png';

function Definition() {

    return (
        <>
        <div className={styles.def_wrap}>
            <div className={styles.text_wrap}>

            </div>
            <img src={def_img} className={styles.def_img}/>
        </div>
        </>
    );
}

export default Definition;