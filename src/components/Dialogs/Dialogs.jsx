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

let dialogsData = [
    {id: 1, name: 'dimich'},
    {id: 2, name: 'andrey'},
    {id: 3, name: 'sveta'},
    {id: 4, name: 'sasha'},
    {id: 5, name: 'valera'}
]
let messagesData = [
    {id: 1, msg: 'hello'},
    {id: 2, msg: 'yo'},
    {id: 3, msg: 'wtsup'},
    {id: 4, msg: 'there'},
    {id: 5, msg: 'hey'}
]
const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
           <div className={s.dialogsItem}>
               <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
               <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
           </div>
            <div className={s.messages}>
                <Message message={messagesData[0].msg} />
                <Message message={messagesData[1].msg} />
            </div>
        </div>
    )
}
export default Dialogs;
