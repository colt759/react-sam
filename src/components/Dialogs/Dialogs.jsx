import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
           <div className={s.dialogsItem}>

               <DialogItem name="dimich" id="1" />
               <DialogItem name="andrey" id="2" />
               <DialogItem name="sveta" id="3" />
               <DialogItem name="sasha" id="4" />
               <DialogItem name="valera" id="5" />
               </div>
            <div className={s.messages}>
                <Message message="hi" />
                <Message message="yo" />
                <Message message="hwyy" />
            </div>
        </div>
    )
}
export default Dialogs;
