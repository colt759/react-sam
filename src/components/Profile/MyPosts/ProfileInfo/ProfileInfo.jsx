import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                {/*<img src="https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg" alt=""/>*/}
            </div>
            <div className={s.descrBlock}>
                описание
            </div>
        </div>
    )
}

export default ProfileInfo;