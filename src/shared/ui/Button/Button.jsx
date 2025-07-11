import styles from './Button.module.scss'

const Button = ({ onClick, text }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{text}
		</button>
	)
}

export default Button
