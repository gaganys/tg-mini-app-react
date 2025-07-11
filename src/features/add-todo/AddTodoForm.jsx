import Button from '../../shared/ui/Button/Button'
import Input from '../../shared/ui/Input/Input'
import styles from './AddTodoForm.module.scss'

const AddTodoForm = () => {
	return (
		<form className={styles.form}>
			<Input placeholder={'Add new todo'} value={''} onChange={() => {}} />
			<Button text={'Add'} onClick={() => {}} />
		</form>
	)
}

export default AddTodoForm
