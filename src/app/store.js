import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../entities/todo/todoSlice'

export const store = configureStore({
	reducer: {
		todo: todoReducer,
	},
})
