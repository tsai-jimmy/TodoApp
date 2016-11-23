/*
ReactDOM.render(
	<h1>Hello</h1>,
	document.getElementById('content')
);
*/
import React from 'react';
import { render } from 'react-dom';
import { Title } from './Components/Title';

/*var Title = React.createClass({
	render: function() {
		return (
			<div>
				<h1>{this.props.text}</h1>
				<h2>Author</h2>
			</div>
		)
	}
});*/

render (<Title text="hello2"/>,test);

