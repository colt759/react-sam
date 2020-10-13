import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src="https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg" alt=""/>
        </div>
        <div>
            <img src="https://pbs.twimg.com/profile_images/808683397702881280/D7SkGM2B.jpg" alt=""/>
        </div>
        <div>
            my posts
            <div>
                new post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>
}

export default Profile;