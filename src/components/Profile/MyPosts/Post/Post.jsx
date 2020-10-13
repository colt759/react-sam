import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://avatarfiles.alphacoders.com/324/thumb-32409.png" alt=""/>
            {props.message}
            <div>
                <span> {props.likesCount} Like</span>
            </div>
        </div>
    )
}

export default Post;