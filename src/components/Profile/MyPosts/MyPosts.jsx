import React from "react";
import Post from './Post/Post';
import styles from './MyPosts.module.css';

const MyPosts = ({dataPosts}) => {

    const postsElements = dataPosts.posts.map(el => <Post key={el.id} message={el.message} likecount={el.likesCount}/>)

    return (
        <div className={styles.posts}>
            <h2>My posts</h2>
            <div className={styles.my_posts_button}>
                <button>Add posts</button>
            </div>
            <div>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;

