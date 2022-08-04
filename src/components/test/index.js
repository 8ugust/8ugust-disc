import styles from './index.module.css';

function Test(props) {

    return (
        <>
        <div className={props.status === 1 ? styles.test_wrap_show : styles.test_wrap_hide}>TEST - HI</div>
        </>
    );
}

export default Test;