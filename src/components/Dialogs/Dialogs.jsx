import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
    debugger;

    const dialogsElements = props.dataDialogs.dialogs
        .map(el => <DialogItem key={el.id} name={el.name} />)
    const messageElements = props.dataDialogs.messages
        .map(el => <Message key={el.id} message={el.message} />)

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
