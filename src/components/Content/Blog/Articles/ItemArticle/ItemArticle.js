import React from 'react';

class ItemArticle extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: this.props.data.titleBlog,
			theme: this.props.data.themeBlog,
			date: this.props.data.date,
			image: this.props.data.blogPhoto,
			imageName: this.props.data.namePhoto,
		};
	}

	render(){
		return(
			<li>
				<img src={ this.state.image } alt={ this.state.imageName }/>
				<div>
					<p>{ this.state.theme }</p>
					<p>{ this.state.title }</p>
					<p>{ this.state.date }</p>
				</div>
			</li>
		);
	}
}

export { ItemArticle };