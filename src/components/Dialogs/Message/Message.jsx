import React from "react";
import styles from './Message.module.css';

const Message = ({message, id}) => {
    return (
        <div>
            <div className={styles.dialog_message}>
                {message}
            </div>
        </div>
    )
}

export default Message;
