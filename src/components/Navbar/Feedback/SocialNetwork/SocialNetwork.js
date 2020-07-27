import React from 'react';

class SocialNetwork extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			img: this.props.social,
		}
	}

	render(){
		return(
			<ul className='socialNetwork'>

			</ul>
		);
	}
}

export { SocialNetwork };