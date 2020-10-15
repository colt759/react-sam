import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


let postsData = [
    {id: 1, name: 'hello how are you?', likesCount: 12},
    {id: 2, name: 'hi how old are you?', likesCount: 10}
]



const MyPost = () => {
    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                new post
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].name} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].name} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    )
}

export default MyPost;