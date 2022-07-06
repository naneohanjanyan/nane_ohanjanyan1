// import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Menu from './pages/Menu/Menu';

function NewApp() {	
	return (
		<div>
			<BrowserRouter>
                <Menu/>
			</BrowserRouter>
		</div>
	);
}

export default NewApp;