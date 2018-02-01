import React, { Component } from 'react';

import ReactDom from 'react-dom';

class App extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render() {
		return (<p>hello world!!!!!!!====</p>);
	}
}

ReactDom.render(
	<App />,
	document.getElementById('root')
)