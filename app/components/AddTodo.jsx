
	var React = require('react');

	var AddTodo = React.createClass({
		handleSubmit: function (event) {
			event.preventDefault();
			var todoText = this.refs.todoText.value;
			if(todoText.length > 0) {
				this.refs.todoText.value = '';
				this.props.onAddTodo(todoText);
			} else {
				this.refs.todoText.focus();
			}

		},
		render: function() {
			return (
				<form ref= "addTodoForm" onSubmit={this.handleSubmit}>
					<input type="text" ref="todoText" placeholder = "What do you need to do?"/>
					<button className="button expanded" type="submit">Add Todo</button>
				</form>
			);
		}
	});

	module.exports = AddTodo;