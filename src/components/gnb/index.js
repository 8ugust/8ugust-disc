import React, { useEffect } from 'react';
import styles from './index.module.css';

function Gnb(props) {

    return (
        <>
        <div className={props.isGnb ? styles.gnb_menu_active : styles.gnb_menu_hidden}>
            <div className={styles.gnb_background} onClick={props.fnIsGnb}>

            </div>
            <div className={styles.gnb_body}>
                <div className={styles.gnb_body_header}>
                    <div className={styles.gnb_body_close}>X</div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Gnb;