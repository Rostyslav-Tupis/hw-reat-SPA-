import React from "react";
import styles from "./nofound_style.module.css"

function NotFoundPage(){
    return(
        <div className={styles['wrapper']}>
            <h1 className={styles['title']}>Sorry , page is not found :(</h1>
        </div>
    )
}

export default NotFoundPage