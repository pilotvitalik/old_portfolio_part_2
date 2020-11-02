import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import './Item.module.css';

function Item(props){
	let match = useRouteMatch({
	  path: props.url,
	  exact: props.activeOnlyWhenExact
	});

	function showWhiteImg(e){
		let img = e.currentTarget.children[0];
		if (!e.currentTarget.classList.contains('activeNavBar')){
			img.src = props.activeImg.whiteImg;
		}
	}

	function showGreyImg(e){
		let img = e.currentTarget.children[0];
		if (!e.currentTarget.classList.contains('activeNavBar')){
			img.src = props.activeImg.darkImg;
		}
	}

	return(
		<li>	
			<NavLink 
				exact 
				to={ props.url }
				activeClassName='activeNavBar'
				onMouseOver={ showWhiteImg }
				onMouseOut={ showGreyImg }
			>
			{ props.data.title }
				<img 
					src={ match ? props.activeImg.whiteImg : props.activeImg.darkImg }
					alt={ props.data.name }
				/>
			</NavLink>
		</li>
	);
}



export { Item };