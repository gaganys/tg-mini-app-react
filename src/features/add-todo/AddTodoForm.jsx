import { Plus } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../entities/todo/todoSlice'
import Button from '../../shared/ui/Button/Button'
import Input from '../../shared/ui/Input/Input'
import styles from './AddTodoForm.module.scss'

const AddTodoForm = () => {
	const [text, setText] = React.useState('')
	const dispatch = useDispatch()

	const onHandleSubmit = e => {
		e.preventDefault()

		if (text.trim()) {
			dispatch(addTodo(text.trim()))
			setText('')
		}
	}

	return (
		<form className={styles.form}>
			<Input
				placeholder={'Add new todo'}
				value={text}
				onChange={e => {
					setText(e.target.value)
				}}
			/>
			<Button text={<Plus />} onClick={onHandleSubmit} />
		</form>
	)
}

export default AddTodoForm
