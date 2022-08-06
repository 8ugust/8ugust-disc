import styles from './index.module.css';
import loading from '../../img/loading.png';

function Wait (props) {

    if (props.isWait === true) {
        window.scrollTo(0, 0);
        setTimeout(() => {props.fnIsWait()}, 1000);
    }

    return (
        <>
        <div className={props.isWait ? styles.wait_layer_active : styles.wait_layer_hidden}>
            <div className={styles.loading}>
			    <img src={loading} alt='loading'/>
            </div>
        </div>
        </>
    )
}

export default Wait;