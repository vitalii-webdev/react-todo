
	var React = require('react');
	var TodoList = require('TodoList');
	var AddTodo = require('AddTodo');
	var TodoSearch = require('TodoSearch');

	var uuid = require('node-uuid');

	var TodoApp = React.createClass({
		getInitialState: function() {
			return {
				showCompleted: false,
				searchText: '',
				todos: [
					{
						id: uuid(),
						text: 'Walk the dog',
						isCompleted: false
					},
					{
						id: uuid(),
						text: 'Clean the yard',
						isCompleted: true
					},
					{
						id: uuid(),
						text: 'Clean the room',
						isCompleted: true
					},
					{
						id: uuid(),
						text: 'Study React',
						isCompleted: false
					}
				]
			}
		},
		handleAddTodo: function(text) {
			this.setState({
				todos: [
					...this.state.todos,
					{
						id: uuid(),
						text: text,
						isCompleted: false
					}
				]
			});
		},
		handleToggle: function(id) {
			var updatedTodos = this.state.todos.map(function(todo) {
				if(todo.id === id) {
					todo.isCompleted = !todo.isCompleted;
				}
				return todo;
			});

			this.setState({
				todos: updatedTodos
			});
		},
		handleSearch: function(showCompleted, searchText) {
			this.setState({
				showCompleted: showCompleted,
				searchText: searchText.toLowerCase()
			});
		},
		render: function() {
			var {todos} = this.state;

			return (
				<div> 
				<TodoSearch onSearch = {this.handleSearch} />
				<TodoList todos = {todos} onToggle= {this.handleToggle} /> 
				<AddTodo onAddTodo = {this.handleAddTodo}/>
				</div>

			);
		}
	});

	module.exports = TodoApp;