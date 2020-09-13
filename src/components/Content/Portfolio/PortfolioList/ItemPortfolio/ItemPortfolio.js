import React from 'react';

class ItemPortfolio extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			img: this.props.data.urlImage,
			nameImg: this.props.data.title,
		};
	}

	render(){
		return(
			<li>
				<img src={ this.state.img } alt={ this.state.nameImg } />
			</li>
		);
	}
}

export { ItemPortfolio };