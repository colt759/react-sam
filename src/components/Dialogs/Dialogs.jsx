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

let dialogs = [
    {id: 1, name: 'dimich'},
    {id: 2, name: 'andrey'},
    {id: 3, name: 'sveta'},
    {id: 4, name: 'sasha'},
    {id: 5, name: 'valera'}
]
let messages = [
    {id: 1, msg: 'hello'},
    {id: 2, msg: 'yo'},
    {id: 3, msg: 'wtsup'},
    {id: 4, msg: 'there'},
    {id: 5, msg: 'hey'}
]

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

let messagesElements = messages.map(m => <Message message={m.msg} />);

const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
           <div className={s.dialogsItem}>
               { dialogsElements }
           </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}
export default Dialogs;
