import React from "react";

import styles from './Users.module.css';


const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDGu86kzXV0WgMQBzHJVkfVtaVkm79qK_vg&usqp=CAU',
                firstName: 'Nikolay',
                status: 'Busy',
                location: {country: 'Russia', cities: 'Moscow'},
                followUser: false
            },
            {
                id: 2,
                avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7MeuveKQTIE2He4J-uum7YLlj-vvmfl4Ww&usqp=CAU',
                firstName: 'Garold',
                status: 'to work',
                location: {country: 'USA', cities: 'Santa Barbara'},
                followUser: true
            },
            {
                id: 3,
                avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF80ktqPlLo4rUm_8SH3064PQXJ42k769sIA&usqp=CAU',
                firstName: 'Hans',
                status: 'In the gym!',
                location: {country: 'Germany', cities: 'Berlin'},
                followUser: false
            },
            {
                id: 4,
                avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU9umjj1k1u-g7jyqINOLZrlE7v03BqjQ80A&usqp=CAU',
                firstName: 'Benita',
                status: 'At work',
                location: {country: 'Spain', cities: 'Madrid'},
                followUser: false
            },
        ])
    }

    return (
        <div className={styles.users}>
            <h2>Users</h2>
            {props.users.map(u => <div key={u.id}>
                <div>
                    <div className={styles.usersAvatar}>
                        <img src={u.avatarImg} alt='avatar'/>
                    </div>
                    <div className={styles.usersButton}>
                        {u.followUser
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>
                                Unfollow
                            </button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>
                                Follow
                            </button>}
                    </div>
                </div>
                <div>
                    <div>
                        <span>Status: </span>
                        {u.status}
                    </div>
                    <div>
                        {u.firstName}
                    </div>
                    <div>
                        {`${u.location.country}, ${u.location.cities}`}
                    </div>
                </div>
            </div>)
            }
        </div>
    )
}

export default Users;