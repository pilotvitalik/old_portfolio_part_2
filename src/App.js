import React from 'react';
import { Navbar } from './components/Navbar/Navbar.js';
import { Content } from './components/Content/Content.js';
import styles from './app.module.css';

class App extends React.Component{
	render(){
		return(
		<div className={styles.wrapper}>
		  <Navbar />
		  <Content />
		</div>
		);
	}
}

export { App };