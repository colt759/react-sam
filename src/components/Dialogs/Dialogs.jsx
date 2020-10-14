import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
           <div className={s.dialogsItem}>
               <div className={s.dialog +' '+ s.active}>
                   dimich
               </div>
               <div className={s.dialog}>
                   andrey
               </div>
               <div className={s.dialog}>
                   sveta
               </div>
               <div className={s.dialog}>
                   sasha
               </div>
               <div className={s.dialog}>
                   valera
               </div>
           </div>
            <div className={s.messages}>
                <div className={s.message}>
                    hi
                </div>
                <div className={s.message}>
                    yo
                </div>
                <div className={s.message}>
                    yiiiii
                </div>
            </div>
        </div>
    )
}
export default Dialogs;
