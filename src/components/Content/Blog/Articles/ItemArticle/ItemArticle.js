import React from 'react';

class ItemArticle extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: this.props.data.titleBlog,
			theme: this.props.data.themeBlog,
			date: this.props.data.date,
		};
	}

	render(){
		return(
			<li>
				{ this.state.title }
			</li>
		);
	}
}

export { ItemArticle };