import React from 'react'
import { useTelegram } from '../shared/hooks/useTelegram'
import './App.css'

function App() {
	const { tg, onToggleButton } = useTelegram()

	React.useEffect(() => {
		tg.ready()
	})

	return (
		<>
			<Header />
			<button onClick={onToggleButton}></button>
		</>
	)
}

export default App
