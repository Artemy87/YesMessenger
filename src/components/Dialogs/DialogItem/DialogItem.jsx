import React from "react";
import {Link} from "react-router-dom";
import styles from './DialogItem.module.css';


const DialogItem = (props) => {
    let path=`/dialogs/${props.id}`
    return (
        <div className={styles.dialogs_items}>
            <Link to={path}>
                {props.name}
            </Link>
        </div>
    )
}

export default DialogItem;
