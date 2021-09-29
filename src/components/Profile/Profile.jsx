import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from './profile.module.css';

const Profile = ({dataPosts}) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo/>
            <MyPosts dataPosts={dataPosts}/>
        </div>
    )
}

export default Profile;