import React from 'react';

class NavMenu extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			items: this.props.navMenu
		}
	}

	componentDidMount(){
		console.log(this.state.items);
	}

	render(){
		const list = this.state.items;
		console.log(list);
		const listItems = list.map((item) =>
			<li>
				<img src={item.url} />
			</li>
		  );
		return (
			<ul>
				{listItems}
			</ul>
		);
	}
}

export { NavMenu };