import React from 'react';
import { Switch, Route } from 'react-router-dom';
import style from './Content.module.css';

import { Home } from './Home/Home.js';
import { About } from './About/About.js';
import { Resume } from './Resume/Resume.js';
import { Portfolio } from './Portfolio/Portfolio.js';
import { Blog } from './Blog/Blog.js';
import { Contact } from './Contact/Contact.js';

class Content extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			contactPage: this.props.content.contactPage,
			aboutPage: this.props.content.aboutPage,
			resumePage: this.props.content.resumePage,
			portfolioPage: this.props.content.portfolioPage,
			blogPage: this.props.content.blogPage,
		}
	}

	render(){
		return(
		<div className={ style.wrapper }>
		  <div>
		    <div className={ style.mobNav }>
		    	<div>
		    	</div>
		    	<p>Виталий Кожушко</p>
		    	<div className={ style.hamburger }>
		    		<span></span>
		    		<span></span>
		    		<span></span>
		    	</div>
		    </div>
		    <Switch>
		    	<Route exact path='/'>
		    		<Home/>
		    	</Route>
		    	<Route path='/about_me'>
		    		<About about={ this.state.aboutPage }/>
		    	</Route>
		    	<Route path='/resume'>
		    		<Resume resume={ this.state.resumePage }/>
		    	</Route>
		    	<Route path='/portfolio'>
		    		<Portfolio portfolio={ this.state.portfolioPage }/>
		    	</Route>
		    	<Route path='/blog'>
		    		<Blog blog={ this.state.blogPage }/>
		    	</Route>
		    	<Route path='/contacts'>
		    		<Contact contactPage={ this.state.contactPage }/>
		    	</Route>
		    </Switch>
		  </div>
		</div>
		);
	}
}

export { Content };