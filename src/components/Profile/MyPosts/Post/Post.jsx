import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://avatarfiles.alphacoders.com/324/thumb-32409.png" alt=""/>
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;