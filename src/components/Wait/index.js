import styles from './index.module.css';

function Wait (props) {

    if (props.isWait === true) {
        window.scrollTo(0, 0);

        if (props.status === 2) {
            setTimeout(() => {
                props.fnIsWait();
            }, 500)
        } else {
            props.fnIsWait();
        }
    }

    return (
        <>
        <div className={props.isWait ? styles.wait_layer_active : styles.wait_layer_hidden}>
				
        </div>
        </>
    )
}

export default Wait;