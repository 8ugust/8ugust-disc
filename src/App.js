import './App.css';
import React from 'react';
import menu_icon from './img/menu.png';
import logo_text from './img/logo_text2.png';
import Gnb from './components/gnb/index.js';

function App() {
	const [isGnb, setIsGnb] = React.useState(false);
	const fnIsGnb = () => {
		if (isGnb === false) setIsGnb(true);
		if (isGnb === true) setIsGnb(false);
	}

	return (
		<div className="App">
			<div className='navbar'>
				<img src={logo_text} className='logo_text' alt='personality_behaviors'></img>
				<img src={menu_icon} className='menu_icon' alt='menu_icon' onClick={fnIsGnb}></img>
			</div>
			<Gnb fnIsGnb={fnIsGnb} isGnb={isGnb}/>
		</div>
	);
}

export default App;
