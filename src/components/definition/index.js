import styles from './index.module.css';
import def_img from '../../img/definition.png';
import div_bot from '../../img/div_bottom.png';

function Definition(props) {

	return (
		<>
		<div className={props.status === 3 ? styles.def_wrap_show : styles.def_wrap_hide}>
			<div className={styles.text_wrap}>
				<h1>DISC는 여러분의<br />'행동유형(behavior)' 을 진단합니다.</h1>
				<p>
					MBTI가 여러분의 성격유형을 진단한다면, DISC는 여러분의 행동유형을 진단합니다.
					여기서 말하는 '행동유형'이란, 일상 생활 속 아주 편안한 상태에서 본인 나름대로의
					독특한 동기요인에 의해 자연스럽게 나타나는 일정한 방식을 지닌 경향성을 의미합니다.
				</p>
				<p>
					미국 콜롬비아대학 심리학교수 Willam Mouston Marston 박사의 연구 결과에 따르면, 
					인간은 자신이 처한 환경, 그리고 그 환경 속에서 본인을 어떻게 인식하느냐에 따라
					4개의 형태로 나뉘어 행동을 하게 된다고 합니다. 박사는 이러한 인식을 축으로 한 인간의 행동을
					각각 주도형(Dominance), 사교형(Influence), 안정형(Steadiness), 신중형(Conscientiousness) 으로 불렀습니다.
				</p>
			</div>
			<img src={div_bot} className={styles.def_img} alt='div_bot'/>
			<img src={def_img} className={styles.def_img} alt='def_img'/>
		</div>
		</>
	);
}

export default Definition;