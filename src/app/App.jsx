import React from 'react'
import Todo from '../pages/todo/Todo'
import { useTelegram } from '../shared/hooks/useTelegram'
import './App.css'

function App() {
	const { tg } = useTelegram()

	React.useEffect(() => {
		tg.ready()
	})

	return (
		<>
			<Todo />
		</>
	)
}

export default App
