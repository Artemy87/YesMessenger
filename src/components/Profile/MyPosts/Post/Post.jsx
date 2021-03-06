import React from "react";
import styles from './Post.module.css';

const Post = ({likecount, message}) => {
    return (
        <div className={styles.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbg8xLTrSvLyNcdOIvTv99VEHSHE26VaK5Q&usqp=CAU'
                alt='img'/>
            <div className={styles.message}>
                <span>likes {likecount}</span>
                <div>{message}</div>
            </div>
        </div>

    )
}

export default Post;