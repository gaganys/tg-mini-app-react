import { useSelector } from 'react-redux'
import TodoItem from '../../entities/todo/TodoItem'
import styles from './TodoList.module.scss'

const TodoList = () => {
	const { tasks } = useSelector(state => state.todo)

	return (
		<ul className={styles.list}>
			{tasks?.map(task => (
				<TodoItem
					key={task.id}
					id={task.id}
					text={task.text}
					isCompleted={task.isCompleted}
				/>
			))}
		</ul>
	)
}

export default TodoList
