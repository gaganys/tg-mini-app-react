import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	tasks: [],
}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const newTodo = {
				id: Date.now().toString(),
				text: action.payload,
				isCompleted: false,
			}

			state.tasks.push(newTodo)
		},
		removeTodo: (state, action) => {
			state.tasks = state.tasks.filter(todo => todo.id !== action.payload)
		},
		toggleTodo: (state, action) => {
			const todo = state.tasks.find(todo => todo.id === action.payload)
			if (todo) {
				todo.isCompleted = !todo.isCompleted
			}
		},
	},
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer
