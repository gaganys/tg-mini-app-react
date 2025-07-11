import AddTodoForm from '../../features/add-todo/AddTodoForm'
import Header from '../../widgets/Header/Header'
import TodoList from '../../widgets/TodoList/TodoList'

const Todo = () => {
	return (
		<>
			<Header />
			<AddTodoForm />
			<TodoList />
		</>
	)
}

export default Todo
