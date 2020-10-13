import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPost = () => {
    return <div>
        my posts
        <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Add post</button>
        </div>
        <div>
            new post
        </div>
        <div className={s.posts}>
            <Post message="hello how are you?"/>
            <Post message="hi how old are you?"/>
        </div>
    </div>
}

export default MyPost;