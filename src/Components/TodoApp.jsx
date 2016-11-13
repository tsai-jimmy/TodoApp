import React,{ Component } from 'react';
import { TodoList } from './TodoList';

export class TodoApp extends Component {
	constructor(props,context) {
		super(props,context);

		this.state = { items:[] , text:''};

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentWillUnmount() {
	}

	componentDidMount() {
	}

	handleSubmit(e) {
		e.preventDefault();
		var newItem = { text: this.state.text, id:Date.now() };
		this.setState( (prevState) =>({ items: prevState.items.concat(newItem),text:''}) );
	}

	handleChange(e) {
		this.setState({ text: e.target.value })
	}

	render() {
		return (
			<div>
				<TodoList items={this.state.items}/>
				<form onSubmit={this.handleSubmit}>
	                <input onChange={this.handleChange} value={this.state.text} />
	                <button>{'Add #' + (this.state.items.length + 1)}</button>
	              </form>
			</div>
		);
	}
}

TodoApp.defaultProps = {
	
}