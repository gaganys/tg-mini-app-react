import { useTelegram } from '../../shared/hooks/useTelegram'
import styles from './Header.module.scss'

const Header = () => {
	const { user } = useTelegram()

	return (
		<header className={styles.header}>
			<span className={styles.text}>TodoList by</span>
			<span className={styles.username}>{user?.username}</span>
		</header>
	)
}

export default Header
