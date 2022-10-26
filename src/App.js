import styles from './App.module.css'
import { CollapseButton } from './components/button'
import { Canvas } from './components/canvas'

function App() {
	return (
		<div className={styles.app}>
			<Canvas />
			<CollapseButton>Collapse lines</CollapseButton>
		</div>
	)
}

export default App
