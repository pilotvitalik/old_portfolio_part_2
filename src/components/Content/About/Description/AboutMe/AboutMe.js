import React from 'react';

class AboutMe extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		console.log(this.props.about)
		return(
			<p>This is AboutMe</p>
		);
	}
}

export { AboutMe };