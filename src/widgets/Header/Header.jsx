import { useTelegram } from '../../shared/hooks/useTelegram'
import Button from '../../shared/ui/Button/Button'
import styles from './Header.module.scss'

const Header = () => {
	const { onClose, user } = useTelegram()

	return (
		<div className={styles.header}>
			<Button onClick={onClose} text={'Close'} />
			<span className={styles.text}>TodoList by</span>
			<span className={styles.username}>{user?.username}</span>
		</div>
	)
}

export default Header
