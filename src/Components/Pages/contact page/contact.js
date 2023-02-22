import React from "react";
import Contacts from "./main_contact_app/conctact";
import styles from './style.module.css'
function Contact(){
    return(
        <div className={styles["main-wrapper"]}>
            <Contacts/>
        </div>
    )
}

export default Contact;