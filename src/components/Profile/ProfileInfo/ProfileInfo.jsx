import React from "react";
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={styles.content}>
                <img src='https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg'
                     alt='img'/>
            </div>
            <div className={styles.content_description}>
                <h3>Ava + description</h3>
            </div>
        </div>
    )
}

export default ProfileInfo;