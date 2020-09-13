import React from 'react';

class ItemPortfolio extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			img: this.props.data.urlImage,
			nameImg: this.props.data.title,
			title: this.props.data.title,
			url: this.props.data.url,
			technologies: this.props.data.technologies,
		};
	}

	render(){
		const techno = this.state.technologies;
		const items = techno.map((item) => 
				<li key={ item.id }>
					{ item.name }
				</li>
		);
		return(
			<li data-url={ this.state.url }>
				<div>
					<p>{ this.state.title }</p>
					<ul>
						{ items }
					</ul>
				</div>
				<img src={ this.state.img } alt={ this.state.nameImg } />
			</li>
		);
	}
}

export { ItemPortfolio };