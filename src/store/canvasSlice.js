import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	canvas: null,
	tool: null,
}
const canvasSlice = createSlice({
	name: 'canvas',
	initialState,
	reducers: {
		createCanvas: (state, action) => {
			state.canvas = action.payload
		},
		createTool: (state, action) => {
			state.tool = action.payload
		},
	},
})

export const canvasReducer = canvasSlice.reducer
export const { createCanvas, createTool } = canvasSlice.actions

export default canvasSlice.reducer
