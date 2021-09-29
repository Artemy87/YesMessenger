import React from "react";
import classes from './Message.module.css';

const Message = (props) => {
    return (
        <div id={props.id} className={classes.dialogs}>
            {props.message}
        </div>
    )
}

export default Message;
