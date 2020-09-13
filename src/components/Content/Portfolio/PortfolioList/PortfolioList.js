import React from 'react';
import { ItemPortfolio } from './ItemPortfolio/ItemPortfolio.js';
import style from './PortfolioList.module.css';

class PortfolioList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			list: this.props.list,
		};
	}

	render(){
		const listPortfolio = this.state.list;
		const items = listPortfolio.map((item) => 
			<ItemPortfolio key={ item.id } data={ item }/>
		);
		return(
			<ul className={ style.portfolioList }>
				{ items }
			</ul>
		);
	}
}

export { PortfolioList };