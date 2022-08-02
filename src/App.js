import './App.css';
import menu_icon from './img/menu.png';
import logo_text from './img/logo_text2.png';

function App() {
	return (
		<div className="App">
			<div className='navbar'>
				<img src={logo_text} className='logo_text' alt='personality_behaviors'></img>
				<img src={menu_icon} className='menu_icon' alt='menu_icon'></img>
			</div>
		</div>
	);
}

export default App;
