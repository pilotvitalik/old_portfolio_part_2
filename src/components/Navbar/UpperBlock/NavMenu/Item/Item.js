import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

function Item(props){
	let match = useRouteMatch({
	  path: props.url,
	  exact: props.activeOnlyWhenExact
	});

	return(
		<li>
			<img src={ match ? props.activeImg.whiteImg : props.activeImg.darkImg } alt={ props.data.name }/>		
			<NavLink exact to={ props.url } activeClassName='activeNavBar'>{ props.data.title }</NavLink>
		</li>
	);
}



export { Item };