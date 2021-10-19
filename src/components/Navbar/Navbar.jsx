import React from "react";
import {NavLink} from "react-router-dom";
import Sidebar from './Sidebar/Sidebar'
import styles from './Navbar.module.css';

const Navbar = ({friends}) => {

    const sidebar = friends
                .map(el => <Sidebar key={el.id} name={el.name} />);

    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/dialogs'>Message</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/users'>Users</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
            <div className={styles.sidebar}>
                <div className={styles.sidebar_header}>Friends</div>
                <div className={styles.sidebar_item}>
                    { sidebar }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;