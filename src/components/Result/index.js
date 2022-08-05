import styles from './index.module.css';

function Result(props) {
    if (props.status === 2) {
        console.log(props.befCalAnswer);
    }

    return (
        <>
        <div className={props.status === 2 ? styles.result_wrap_show : styles.result_wrap_hide}>
            HI
        </div>
        </>
    );
}

export default Result;