import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar() {
    return (
        <ul className={styles.NavBarContainer}>
            <li className={styles.LiStyle}>
                <Link to="/" className={styles.TextLink}>Home</Link>
            </li>
            <li className={styles.LiStyle}>
                <Link to="/empresa" className={styles.TextLink}>Empresa</Link>
            </li>
            <li className={styles.LiStyle}>
                <Link to="/contato" className={styles.TextLink}>Contato</Link>
            </li>
        </ul>
    )
}

export default NavBar