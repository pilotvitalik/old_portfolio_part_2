import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import style from './Item.module.css';

function Item(props){
	let match = useRouteMatch({
	  path: props.url,
	  exact: props.activeOnlyWhenExact
	});
	let page = '';
	let prePage = props.url.replace(/\//g, '');
	if (prePage.length === 0){
		prePage = 'mainLength'
	}
	page = style[prePage];

	return(
		<li className={ page }>	
			<NavLink exact to={ props.url } activeClassName='activeNavBar'>
				{ props.data.title }
				<img src={ match ? props.activeImg.whiteImg : props.activeImg.darkImg } alt={ props.data.name }/>
			</NavLink>
		</li>
	);
}



export { Item };