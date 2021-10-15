import React from "react";
import Post from './Post/Post';

import styles from './MyPosts.module.css';


const MyPosts = (
    {posts, newPostText, addPost, updateNewPostText}
) => {

    const postsElements = posts.map(p =>
            <Post key={p.id}
                  message={p.message}
                  likecount={p.likesCount}/>
        );

    const newPostElement = React.createRef();

    const onAddPost = () => {
        addPost();
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        updateNewPostText(text);
    }

    return (
        <div className={styles.posts}>
            <h2>My posts</h2>
            <div className={styles.post_form}>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={newPostText}
                    placeholder='new post'/>
            </div>
            <div className={styles.my_posts_button}>
                <button onClick={ onAddPost }>Add posts</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;

