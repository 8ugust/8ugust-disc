import './App.css';
import React from 'react';
import menu_icon from './img/menu.png';
import logo_text from './img/logo_text2.png';
import Gnb from './components/gnb';
import Definition from './components/definition';
import Test from './components/test';
import Result from './components/Result';

function App() {

	// GNB Menu
	const [isGnb, setIsGnb] = React.useState(false);
	const fnIsGnb = () => {
		if (isGnb === false) setIsGnb(true);
		if (isGnb === true) setIsGnb(false);
	}

	// Contnets
	// 1 - DISC Test Page
	// 2 - DISC Result Page
	// 3 - DISC Definition Page
	const [status, setStatus] = React.useState(1);

	return (
		<>
		<div className='pc-left'></div>
		<div className="App">
			<div className='navbar'>
				<img src={logo_text} className='logo_text' alt='personality_behaviors' onClick={() => setStatus(1)}></img>
				<img src={menu_icon} className='menu_icon' alt='menu_icon' onClick={fnIsGnb}></img>
			</div>
			{status === 1 ? <Test /> : null}
			{status === 2 ? <Result /> : null}
			{status === 3 ? <Definition /> : null}
			<Gnb fnIsGnb={fnIsGnb} isGnb={isGnb} setStatus={setStatus}/>
		</div>
		<div className='pc-right'></div>
		</>
	);
}

export default App;
