import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


let posts = [
    {id: 1, name: 'hello how are you?', likesCount: 12},
    {id: 2, name: 'hi how old are you?', likesCount: 10}
]
let postsElement = posts.map(p => <Post message={p.name} likesCount={p.likesCount}/>);


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
                { postsElement }
            </div>
        </div>
    )
}

export default MyPost;