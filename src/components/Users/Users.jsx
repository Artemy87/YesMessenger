import React from "react";
import userPhoto from '../../assets/images/149071.png';

import styles from './Users.module.css';


const Users = (props) => {
        // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pagesCount = 10;
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div className={styles.pageNumbers}>
                    {pages.map(p => {
                        return <span
                            className={props.currentPage === p && styles.currentNumber}
                            onClick={() => props.onPageChanged(p)}
                        >{p}</span>
                    })}
                </div>
                {props.users.map(u => {
                    return (
                        <div key={u.id}  className={styles.users}>
                            <div className={styles.usersAvatar}>
                                <img src={u.photos.small != null
                                    ? u.photos.small
                                    : userPhoto} alt='avatar'/>
                            </div>
                            <div className={styles.usersButton}>
                                {u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)}}
                                    >Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)}}
                                    >Follow</button>}
                            </div>
                            <div className={styles.usersStatus}>
                                <span>status: </span>
                                {u.status}
                            </div>
                            <div className={styles.usersInfo}>
                                {u.name}
                            </div>
                        </div>
                    )
                })
                }
            </div>
        )
}

export default Users;