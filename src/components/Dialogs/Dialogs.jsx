import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import styles from './Dialogs.module.css';


const Dialogs = (
    {dialogs, messages, newMessageBody, sendMessageClick, messageChange}
) => {

    const dialogsElements = dialogs
        .map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)

    const messageElements = messages
        .map(m => <Message key={m.id} message={m.message}/>)

    const onSendMessageClick = () => {
        sendMessageClick();
    }
    const onMessageChange = (e) => {
        const text = e.target.value;
        messageChange(text);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={styles.dialogs_messages}>
                {messageElements}
                <div className={styles.dialogs_send_messages}>
                    <div>
                        <textarea
                            className={styles.send_message_form}
                            onChange={onMessageChange}
                            placeholder='new message'
                            value={newMessageBody}/>
                    </div>
                    <button
                        className={styles.send_message_button}
                        onClick={onSendMessageClick}
                    >Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
