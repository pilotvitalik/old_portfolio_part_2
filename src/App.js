import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './redux/store.js';
import { Navbar } from './components/Navbar/Navbar.js';
import { Content } from './components/Content/Content.js';
import styles from './app.module.css';

class App extends Component{
	constructor(){
		super();
		this.state = {
			activeLang: 'RU',
		};
		this.changeLang = this.changeLang.bind(this);
		this.compareLang = this.compareLang.bind(this);
	}

	changeLang(data){
		this.setState({
			activeLang: data,
		});
	}

	compareLang(){
		return this.state.activeLang;
	}

	render(){
		return(
			<Router>
				<div className={ styles.wrapper }>
				  <Navbar navBar={ store } onLangChange={ this.changeLang }/>
				  <Content content={ store } lang={ this.state.activeLang } onCompareLang={ this.compareLang }/>
				</div>
			</Router>
		);
	}
}

export { App };