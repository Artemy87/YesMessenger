import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import styles from './Dialogs.module.css';

const Dialogs = ({dataDialogs, dataMessages}) => {
    const dialogsElements = dataDialogs
        .map(el => <DialogItem id={el.id} name={el.name} />)
    const messageElements = dataMessages
        .map(el => <Message message={el.message} />)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                { dialogsElements }
            </div>
            <div className={styles.messages}>
                { messageElements }
            </div>
        </div>
    )
}

export default Dialogs;
