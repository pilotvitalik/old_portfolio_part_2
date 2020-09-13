import React from 'react';
import { HeaderPage } from '../../Common/HeaderPage/HeaderPage.js';
import { CatNavMenu } from './CatNavMenu/CatNavMenu.js';
import { PortfolioList } from './PortfolioList/PortfolioList.js';
import style from './Portfolio.module.css';

class Portfolio extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			titlePage: this.props.portfolio[0].portfolioIcon,
			category: this.props.portfolio[1],
			listPortfolio: this.props.portfolio[2],
		};
	}

	render(){
		return(
			<div className={ style.portfolio }>
				<HeaderPage icon={ this.state.titlePage }/>
				<CatNavMenu cat={ this.state.category }/>
				<PortfolioList list={ this.state.listPortfolio }/>
			</div>
		);
	}
}

export { Portfolio };