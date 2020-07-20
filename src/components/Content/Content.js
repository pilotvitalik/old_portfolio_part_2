import React from 'react';
import style from './Content.module.css';

class Content extends React.Component{
	render(){
		return(
		<div className={ style.wrapper }>
		  <div>
		    <div className={ style.mobNav }>
		    	<div>
		    	</div>
		    	<p>Виталий Кожушко</p>
		    	<div className={ style.hamburger }>
		    		<span></span>
		    		<span></span>
		    		<span></span>
		    	</div>
		    </div>
		    <p>This is content block</p>
		  </div>
		</div>
		);
	}
}

export { Content };