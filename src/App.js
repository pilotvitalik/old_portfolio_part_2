import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store.js';
import { Navbar } from './components/Navbar/Navbar.js';
import { Content } from './components/Content/Content.js';
import styles from './app.module.css';

class App extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<div className={styles.wrapper}>
				  <Navbar navBar={store}/>
				  <Content />
				</div>
			</BrowserRouter>
		);
	}
}

export { App };