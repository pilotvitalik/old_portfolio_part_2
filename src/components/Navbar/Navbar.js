import React from 'react';
import style from './Navbar.module.css';

class Navbar extends React.Component{
	render(){
		return(
		<ul>
		  <li>Photo</li> 
		  <li>NavMenu</li>
		  <li>SocialNetwork</li>
		  <li>Rights</li>	
		</ul>
		);
	}
}

export { Navbar };