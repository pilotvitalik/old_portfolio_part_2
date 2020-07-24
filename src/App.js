import React from 'react';
import { store } from './redux/store.js';
import { Navbar } from './components/Navbar/Navbar.js';
import { Content } from './components/Content/Content.js';
import styles from './app.module.css';

class App extends React.Component{
	render(){
		return(
		<div className={styles.wrapper}>
		  <Navbar navMenu={store.whiteImg}/>
		  <Content />
		</div>
		);
	}
}

export { App };