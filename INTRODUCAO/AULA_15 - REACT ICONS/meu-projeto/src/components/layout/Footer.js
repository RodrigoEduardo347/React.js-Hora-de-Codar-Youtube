import styles from './Footer.module.css'
import { FaFacebook, FaFacebookMessenger, FaInstagram, FaLinkedinIn} from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <nav className={styles.NavListFooter}>
                <li><FaFacebook /></li>
                <li><FaFacebookMessenger /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedinIn /></li>
            </nav>   
        </footer>
    )
}

export default Footer
