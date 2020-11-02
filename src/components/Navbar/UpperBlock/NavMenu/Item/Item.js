import React, { useReducer } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import './Item.module.css';

function reducer(state, action){
	if (action.direction === 'white'){
		if (action.el !== '' && !action.el.classList.contains('activeNavBar')){
			action.el.children[0].src = action.img;
			return false;
		}
	}
	if (action.el !== '' && !action.el.classList.contains('activeNavBar')){
		action.el.children[0].src = action.img;
	}
}

function Item(props){
	const [state, dispatch] = useReducer(reducer, {el: '', img: props.activeImg.darkImg, direction: '',});

	let match = useRouteMatch({
	  path: props.url,
	  exact: props.activeOnlyWhenExact
	});

	return(
		<li>	
			<NavLink 
				exact 
				to={ props.url }
				activeClassName='activeNavBar'
				onMouseOver={(e) => dispatch({
					el: e.currentTarget, 
					img: props.activeImg.whiteImg,
					direction: 'white',
				})}
				onMouseOut={(e) => dispatch({
					el: e.currentTarget, 
					img: props.activeImg.darkImg,
					direction: 'dark',
				})}
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