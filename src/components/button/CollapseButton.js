import styles from '../button/CollapseButton.module.css'

const CollapseButton = ({ children }) => {
	return <button className={styles.collapseButton}>{children}</button>
}

export default CollapseButton
