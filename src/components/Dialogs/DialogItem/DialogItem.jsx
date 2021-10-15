import React from "react";
import {Link} from "react-router-dom";
import styles from './DialogItem.module.css';


const DialogItem = (props) => {

    let path=`/dialogs/${props.id}`

    return (
        <div className={styles.dialogs_items }>
            <div className={styles.item}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbg8xLTrSvLyNcdOIvTv99VEHSHE26VaK5Q&usqp=CAU'
                    alt='img'/>
            </div>
            <div className={styles.name}>
                <Link to={path}>
                    {props.name}
                </Link>
            </div>
        </div>
    )
}

export default DialogItem;
