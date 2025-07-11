import { Check, Trash } from 'lucide-react'
import { useDispatch } from 'react-redux'
import styles from './TodoItem.module.scss'
import { removeTodo, toggleTodo } from './todoSlice'

const TodoItem = ({ id, text, isCompleted }) => {
	const dispatch = useDispatch()

	const onDeleteTask = id => {
		dispatch(removeTodo(id))
	}

	const onToggleTask = id => {
		dispatch(toggleTodo(id))
	}

	return (
		<li key={id} className={styles.task}>
			<div className={styles.info} onClick={() => onToggleTask(id)}>
				<div
					className={isCompleted ? styles.checkboxCompleted : styles.checkbox}
				>
					<Check style={{ opacity: isCompleted ? 1 : 0 }} size={20} />
				</div>
				<div
					className={styles.text}
					style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}
				>
					{text}
				</div>
			</div>

			<Trash onClick={() => onDeleteTask(id)} className={styles.delete} />
		</li>
	)
}

export default TodoItem
