import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './redux/store.js';
import { Navbar } from './components/Navbar/Navbar.js';
import { Content } from './components/Content/Content.js';
import styles from './app.module.css';

class App extends Component{
	render(){
		return(
			<Router>
				<div className={ styles.wrapper }>
				  <Navbar navBar={ store }/>
				  <Content content={ store }/>
				</div>
			</Router>
		);
	}
}

export { App };