import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__title}>Movie App</h2>
                <p className={styles.Footer__author}>Created by R10-Movies</p>
            </footer>
        </div>
    );
}

export default Footer;