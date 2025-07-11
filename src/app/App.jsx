import React from 'react'
import { useTelegram } from '../shared/hooks/useTelegram'
import Header from '../widgets/Header/Header'
import './App.css'

function App() {
	const { tg, onToggleButton } = useTelegram()

	React.useEffect(() => {
		tg.ready()
	})

	return (
		<>
			<Header />
			<button onClick={onToggleButton}> Изменить</button>
		</>
	)
}

export default App
