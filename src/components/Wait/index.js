import loading from '../../img/loading.png';
import styles from './index.module.css';
import React from 'react';

function Wait (props) {

    if (props.isWait === true) {
        window.scrollTo(0, 0);
        if (props.element.current !== undefined) props.moveTop();
        setTimeout(() => {props.fnIsWait()}, 1000);
    }

    return (
        <div> 
            <div className={props.isWait ? styles.wait_layer_active : styles.wait_layer_hidden}>
                <div className={styles.loading}>
                    <img src={loading} alt='loading'/>
                </div>
            </div>
        </div> 
    )
}

export default Wait;