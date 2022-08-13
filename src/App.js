import './App.css';
import React from 'react';
import menu_icon from './img/menu.png';
import logo from './img/logo.png'
import logo_text from './img/logo_text.png';
import Gnb from './components/gnb';
import Definition from './components/definition';
import Test from './components/test';
import Result from './components/Result';
import Wait from './components/Wait';

function App() {

	// Questions
    const questions = [
        [['열정적인', 'I', 'I'], ['대담한', 'D', 'D'], ['치밀한', 'C', 'C'], ['만족해하는', 'S', 'S']],
        [['신중한', 'C', 'C'], ['결단력 있는', 'D', 'D'], ['확신을 주는', 'I', 'I'], ['호의적인', 'S', 'N']],
        [['다정한', 'I', 'N'], ['정확한', 'C', 'C'], ['솔직하게 말하는', 'D', 'D'], ['변화가 적은', 'N', 'S']],
        [['말하기 좋아하는', 'I', 'I'], ['자제력있는', 'C', 'C'], ['관습을 따르는', 'S', 'S'], ['결단력 있는', 'D', 'D']],
        [['도전하는', 'D', 'D'], ['통찰력있는', 'C', 'C'], ['사교적인', 'I', 'I'], ['온건한', 'S', 'S']],
        [['온화한', 'S', 'S'], ['설득력있는', 'I', 'N'], ['겸손한', 'N', 'C'], ['독창적 아이디어 내는', 'N', 'D']],
        [['표현력있는', 'I', 'I'], ['조심성있는', 'C', 'C'], ['주도적인', 'D', 'D'], ['민감히 반응하는', 'N', 'S']],
        [['호의적인', 'I', 'I'], ['세심한', 'C', 'N'], ['겸손한', 'S', 'S'], ['참을성이 적은', 'D', 'D']],
        [['사려깊은', 'C', 'C'], ['남 의견에 잘 동의하는', 'S', 'S'], ['매력적인', 'I', 'I'], ['확고한', 'D', 'D']],
        [['용감한', 'D', 'D'], ['격려하는', 'I', 'I'], ['순응하는', 'S', 'S'], ['수줍어하는', 'N', 'C']],
        [['내성적인', 'C', 'C'], ['호의적인', 'S', 'S'], ['의지가 강한', 'D', 'D'], ['명량한', 'I', 'I']],
        [['남을 격려하는', 'I', 'I'], ['친절한', 'S', 'S'], ['주의깊은', 'C', 'C'], ['독림심 강한', 'D', 'D']],
        [['경쟁심있는', 'D', 'D'], ['생각이 깊은', 'S', 'S'], ['활발한', 'I', 'I'], ['자신을 잘 드러내지 않는', 'C', 'C']],
        [['세밀한', 'C', 'C'], ['유순한', 'S', 'S'], ['완고한', 'D', 'D'], ['놀기 좋아하는', 'I', 'I']],
        [['사람에게 호감을 주는', 'I', 'I'], ['생각이 깊은', 'C', 'N'], ['의지가 굳은', 'D', 'D'], ['일관되게 행동하는', 'S', 'S']],
        [['논리적인', 'C', 'C'], ['과감한', 'D', 'D'], ['충실한', 'S', 'S'], ['인기있는', 'I', 'I']],
        [['사교적인', 'I', 'I'], ['참을성있는', 'S', 'S'], ['자신감있는', 'D', 'D'], ['말씨가 부드러운', 'C', 'C']],
        [['의존적인', 'S', 'S'], ['의욕적인', 'D', 'N'], ['철저한', 'C', 'C'], ['활기있는', 'I', 'I']],
        [['의욕적인', 'D', 'D'], ['외향적인', 'I', 'I'], ['친근한', 'S', 'S'], ['갈등을 피하는', 'N', 'C']],
        [['유머가 있는', 'I', 'I'], ['이해심있는', 'S', 'S'], ['공평한', 'N', 'C'], ['단호한', 'D', 'D']],
        [['자제력있는', 'C', 'C'], ['관대한', 'S', 'S'], ['활기있는', 'I', 'I'], ['고집스런', 'D', 'D']],
        [['재치있는', 'I', 'I'], ['내향적인', 'C', 'C'], ['강인한', 'D', 'D'], ['쉽게 화내지않는', 'S', 'S']],
        [['남과 잘 어울리는', 'I', 'I'], ['점잖은', 'C', 'C'], ['활기찬', 'D', 'D'], ['너그러운', 'S', 'S']],
        [['매력있는', 'I', 'I'], ['흡족해하는', 'S', 'S'], ['지시하는', 'D', 'D'], ['양보하는', 'C', 'C']],
        [['자기주장을 하는', 'D', 'D'], ['체계적인', 'C', 'C'], ['협력적인', 'S', 'S'], ['즐거운', 'I', 'I']],
        [['유쾌한', 'I', 'I'], ['정교한', 'C', 'C'], ['결과를 요구하는', 'D', 'D'], ['침착한', 'S', 'S']],
        [['변화를 추구하는', 'D', 'D'], ['우호적인', 'S', 'S'], ['호소력있는', 'I', 'I'], ['꼼꼼한', 'C', 'C']],
        [['공손한', 'C', 'C'], ['새롭게 시작하는', 'D', 'D'], ['낙천적인', 'I', 'I'], ['도움을 주려하는', 'S', 'S']]
    ];

	const behaviorType = {
		"D" : [
			"타고난 리더. 주도적으로 듣고 말하며 성취 욕구를 통해 성장하는 자. 도전 정신을 통해 권위와 권력을 쟁취하는 자.",
			"주도형(Dominance)를 강점으로 지닌 사람들은 주도적이면서 성취욕구가 높습니다. 삶의 페이스가 빠른 편에 속하며, 이러한 성향 때문에 의사소통 상황에서 빠르고 간단명료하게 말하는 특성이 있습니다. 지금 당장 해야하는 것에 집중하기에 생각보다 몸이 먼저 나가는 경향을 보이며, 듣는 상황에서 답답함을 느끼면 개입하여 상황 및 내용을 정리해주곤 합니다. 업무 상황에 놓일 땐 '그래서 나는 뭐 해?' 와 같은 말을 외우며 자신이 할 일을 찾아 나섭니다.",
			"업무에 대한 본인의 결정권이 극대화되는 환경을 선호합니다. 업무 과정보단 결과를 지향하고, 빠른 결과를 보기 위해 속도내어 업무를 봅니다. 또한 결과에 대한 보상을 중요시하기 때문에 직장을 고를 때 워라벨보단 연봉 그 자체에 대한 중요도를 더욱 높게 평가합니다. 반대로 통제권이 없거나 타인의 감독을 받는 환경을 회피하고자 합니다. 또한 본인에 대한 평가가 부드럽가나 약하다는 인식이 드는 것을 싫어합니다. 반복적이고 예측이 가능한 업무를 보는 환경을 꺼려합니다.",
		],
		"I" : [
			"타고난 공감능력. 자신의 생각과 감정을 타인과 공유하며, 설득력 있고 정치적인 감각으로 유머러스한 자. 밝고 활기차며 긍정적인 면모를 지닌 자.",
			"HI",
			"HI",
			"HI"
		],
		"S" : [
			"타고난 계획주의자. 안정적인 상황을 선호하고 평화로움을 추구하는 자. 돌발상황에서 발생하는 스트레스를 피하고자 계획을 추구하는 자.",
			"HI",
			"HI",
			"HI"
		],
		"C" : [
			"타고난 신중함. 규칙 및 규범을 준수하고 정확한 정보 파악에 힘쓰는 자. 실수하지 않고자 자신에게 또한 엄격한 잣대를 요구하는 자.",
			"HI",
			"HI",
			"HI"
		],

		"결과지향자" : [
			"결과지향자는 빠른 변화를 추구하고 트렌드를 선호하며 답답함 상황을 회피하고자 먼저 나서서 상황을 정리하고 리드하는 경향을 보입니다.",
			"결과지향자는 주도형(Dominance)의 강점에서 사람과의 관계를 중요시하는 사고가 더해진 성향을 가집니다. 따라서 외향적이고 에너지가 많으며 적극적인 행동 경향을 보입니다.",
			"결과지향자는 굉잫이 급한 성격의 소유자로 매우 급한 행동 경향을 보입니다. 타인이 무언가 과정을 차근차근 설명하는 상황이 닥친다면 결과지향지는 이 상황을 굉장히 지루해하고 답답해합니다.",
			"결과지향자는 타인에게 무신경하다는 인상을 남깁니다. 업무를 상의 없이 독자적으로 처리하며, 타인의 조언을 한 귀로 흘릴 때가 종종 있기 떄문입니다. 하지만 타인의 진심어린 충고를 들을 때면 굉장히 고마워하곤 합니다. 패션, 광고, 뷰티, 크리에이터와 같은 이미지를 가지고 있습니다."
		],

		"성취자" : [
			"성취자는 기준없는 변화에 큰 스트레스를 받으며 그 무엇보다 자신의 소속된 팀의 의견을 중요시합니다. 소속을 위해 자신을 희생하는 경향을 보입니다.",
			"성취자는 주도형(Dominance)의 강점에서 안정적이고 싶어하는 사고가 더해진 성향을 가집니다. 따라서 새로운 조직에 가담할 때 변화된 환경에 매우 빠르게 적응되는 모습을 보이곤 하며, 불확실한 상황에 대한 걱정을 많이 하는 경향을 보입니다.",
			"성취자는 주도적이고 성취욕구가 강하지만, 안정적이고 조직적인 것을 선호하기 때문에 몸과 마음이 달라 스트레스를 받곤 합니다. 행동으로 빠르게 해결하고 싶은 마음과 걱정스러운 마음이 충돌하여 몸이 앞서진 않지만 생각이 많아 혼자 갈등하곤 합니다.",
			"성취자는 목표와 순서가 정해지지 않은 업무를 싫어합니다. 하나의 업무를 나눠 중구난방식으로 진행될바에 차라리 본인 스스로 다 하고 말겠다며 희생하는 행동 경향을 보입니다. 프로젝트를 관리하는 팀장 또는 부장님과 같은 이미지를 가지고 있습니다."
		],

		"개척가" : [
			"개척가는 업무중심의 사고를 바탕으로 효율과 원리원칙을 중요시하며 명확한 근거로 똑부러지는 행동 경향을 보입니다.",
			"개척가는 주도형(Dominance)의 강점에 신중하고 원리원칙을 중요시하는 사고가 더해진 성향을 가집니다. 따라서 논리적이고 과학적이어야하며, 무엇이든 납득이 되어야만 하고, 그렇지 못할 경우 비판적인 행동 경향을 보입니다.",
			"개척가는 타인에게 겉모습과 말투가 굉장히 차갑다는 인상을 남깁니다. 이는 타인에게 냉정한 행동을 보인다는 의미이기도 하지만, 반대로 말하자면 뒤끝이 없고 시원시원하게 행동한다는 의미이기도 합니다. 때문에 어느정도 대화를 나눠본 상대는 당신을 '카리스마있고 멋지다' 라고 표현하기도 합니다.",
			"개척가는 굉장히 강력한 승부욕을 지니고 있습니다. 따라서 업무중심적이며 워커홀릭 경향을 보이기도 합니다. 목표 달성을 중요하게 여기며 보상이 확실한 경우 업무를 더욱 잘 해내는 편입니다. 대중적인 강사 또는 사업가, CEO, 전문가 기질을 타고난 마이스터와 같은 이미지를 가지고 있습니다."
		],

		"정치가" : [
			"HI", "HI", "HI", "HI"
		],

		"카운셀러" : [
			"HI", "HI", "HI", "HI"
		],
		
		"협상가" : [
			"HI", "HI", "HI", "HI"
		],
		
		"디자이너" : [
			"HI", "HI", "HI", "HI"
		],

		"상담가" : [
			"HI", "HI", "HI", "HI"
		],
		
		"관리자" : [
			"HI", "HI", "HI", "HI"
		],

		"설계자" : [
			"HI", "HI", "HI", "HI"
		],

		"평론가" : [
			"HI", "HI", "HI", "HI"
		],
		
		"완벽주의자" : [
			"HI", "HI", "HI", "HI"
		],

		"타입명" : [
			"HI", "HI", "HI", "HI"
		]
		
	};

	// GNB Menu
	const [isGnb, setIsGnb] = React.useState(false);
	const fnIsGnb = () => {
		if (isGnb === false) setIsGnb(true);
		if (isGnb === true) setIsGnb(false);
	}

	// Wait Layer
	const [isWait, setIsWait] = React.useState(true);
	const fnIsWait = () => {
		if (isWait === false) setIsWait(true);
		if (isWait === true) setIsWait(false);
	}

	// Contnets
	// 1 - DISC Test Page
	// 2 - DISC Load Page
	// 3 - DISC Result Page
	// 4 - DISC Definition Page
	const [status, setStatus] = React.useState(1);

	// Result Variable
	const [befCalAnswer, setBefCalAnswer] = React.useState([]);

	return (
		<>
		<div className='pc-left'></div>
		<div className="App">
			<div className='navbar'>
				<img src={logo} className='logo' alt='personality_behaviors'></img>
				<img src={logo_text} className='logo_text' alt='personality_behaviors'></img>
				<img src={menu_icon} className='menu_icon' alt='menu_icon' onClick={fnIsGnb}></img>
			</div>
			<div className='content-body'>
				<Definition status={status} setStatus={setStatus}/>
				<Test status={status} setStatus={setStatus} setBefCalAnswer={setBefCalAnswer} questions={questions} isGnb={isGnb} fnIsWait={fnIsWait}/>
				<Result status={status} setStatus={setStatus} befCalAnswer={befCalAnswer} questions={questions} behaviorType={behaviorType}/>
			</div>
			<Gnb fnIsGnb={fnIsGnb} isGnb={isGnb} status={status} setStatus={setStatus} fnIsWait={fnIsWait} setBefCalAnswer={setBefCalAnswer}/>
			<Wait isWait={isWait} fnIsWait={fnIsWait} status={status} setStatus={setStatus}/>
		</div>
		<div className='pc-right'></div>
		</>
	);
}

export default App;
