import './App.css';
import React from 'react';
import menu_icon from './img/menu.png';
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
        [['사려깊은', 'C', 'C'], ['남 의견에 잘 동의하는', 'C', 'C'], ['매력적인', 'I', 'I'], ['확고한', 'D', 'D']],
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

	// GNB Menu
	const [isGnb, setIsGnb] = React.useState(false);
	const fnIsGnb = () => {
		if (isGnb === false) setIsGnb(true);
		if (isGnb === true) setIsGnb(false);
	}

	// Wait Layer
	const [isWait, setIsWait] = React.useState(false);
	const fnIsWait = () => {
		if (isWait === false) setIsWait(true);
		if (isWait === true) setIsWait(false);
	}

	// Contnets
	// 1 - DISC Test Page
	// 2 - DISC Result Page
	// 3 - DISC Definition Page
	const [status, setStatus] = React.useState(1);

	// Result Variable
	const [befCalAnswer, setBefCalAnswer] = React.useState([]);

	return (
		<>
		<div className='pc-left'></div>
		<div className="App">
			<div className='navbar'>
				<img src={logo_text} className='logo_text' alt='personality_behaviors'></img>
				<img src={menu_icon} className='menu_icon' alt='menu_icon' onClick={fnIsGnb}></img>
			</div>
			<div className='content-body'>
				<Definition status={status} setStatus={setStatus}/>
				<Test status={status} setStatus={setStatus} setBefCalAnswer={setBefCalAnswer} questions={questions} isGnb={isGnb} fnIsWait={fnIsWait}/>
				<Result status={status} setStatus={setStatus} befCalAnswer={befCalAnswer} questions={questions}/>
			</div>
			<Gnb fnIsGnb={fnIsGnb} isGnb={isGnb} status={status} setStatus={setStatus} fnIsWait={fnIsWait}/>
			<Wait isWait={isWait} fnIsWait={fnIsWait} status={status}/>
		</div>
		<div className='pc-right'></div>
		</>
	);
}

export default App;
