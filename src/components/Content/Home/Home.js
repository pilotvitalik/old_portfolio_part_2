import React from 'react';
import style from './home.module.css';

class Home extends React.Component{
	render(){
		return(
			<div class={ style.homeTitle }>
				<div>
					<h3>Виталий </h3><h3>Кожушко</h3>
				</div>
				<p>Frontend developer</p>
			</div>
		);
	}
}

export { Home };