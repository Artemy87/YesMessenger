import React from "react";
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src='https://cdn.logo.com/hotlink-ok/logo-social.png'  alt='logo'/>
            <h1 className={styles.name_header}>СОЦСЕТЬ</h1>
        </header>
    );
}

export default Header;