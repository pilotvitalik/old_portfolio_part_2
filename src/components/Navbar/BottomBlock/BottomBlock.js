import React from 'react';
import { SocialNetwork } from './SocialNetwork/SocialNetwork.js';
import { Rights } from './Rights/Rights.js';
import style from './bottomBlock.module.css';

class BottomBlock extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			social: this.props.social,
			rights: this.props.rights,
		}
	}

	render(){
		return(
			<div className={ style.bottomBlock }>
				<SocialNetwork social={ this.state.social }/>
				<Rights rights={ this.state.rights }/>
			</div>
		);
	}
}

export { BottomBlock };
