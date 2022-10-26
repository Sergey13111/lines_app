import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createCanvas, createTool } from '../../store/canvasSlice'
import Line from '../../tools/Line'

import styles from '../canvas/Canvas.module.css'

const Canvas = () => {
	const dispatch = useDispatch()
	const canvasRef = useRef()
	const { canvas, tool } = useSelector((state) => state.canvas)
	console.log(canvas)

	useEffect(() => {
		const canvas = canvasRef.current
		dispatch(createCanvas(canvas))
		dispatch(createTool(new Line(canvas)))
		console.log(new Line(canvas))
	}, [dispatch])

	// const mouse = {
	// 	x: 0,
	// 	y: 0,
	// 	left: false,
	// 	right: false,
	// }

	return (
		<div className={styles.canvasWrapper}>
			<canvas
				ref={canvasRef}
				// onmousedown={mouseDownHandler}
				// onmouseup={mouseUpHandler}
				// onmousemove={mouseMoveHandler}
				className={styles.canvas}
				width={900}
				height={700}
			/>
		</div>
	)
}

export default Canvas
