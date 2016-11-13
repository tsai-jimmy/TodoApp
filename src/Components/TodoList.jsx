import React,{ Component } from 'react';

export class TodoList extends Component {
	constructor(props,context) {
		super(props,context);
	}

	componentWillUnmount() {
	}

	componentDidMount() {
	}

	render() {
		return (
			<ul>
              {this.props.items.map ( item => (<li key={item.id}>{item.text}</li>) )}
            </ul>
		);
	}
}

TodoList.defaultProps = {
	
}