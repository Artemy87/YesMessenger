import React from "react";
import styles from './Sidebar.module.css';

const Sidebar = (props) => {
    return (
        <div className={styles.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbg8xLTrSvLyNcdOIvTv99VEHSHE26VaK5Q&usqp=CAU'
                 alt='img'/>
            <div>
                {props.name}
            </div>
        </div>
    )
}

export default Sidebar;
