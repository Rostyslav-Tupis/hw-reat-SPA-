import React from "react";
import styles from '../nav-bar/style.module.css'
import { Link } from "react-router-dom";

import {appRoutes} from '../../Routes/routes'

function Nav(){
    return(
        <header className={styles['header']}>
            <nav className={styles['naviation']}>
                <ul className={styles['list']}>
                    <li className={styles['list-item']}><Link className={styles['link-it']} to={appRoutes.home.path} >Home </Link></li>
                    <li className={styles['list-item']}><Link className={styles['link-it']} to={appRoutes.post.path}>Posts </Link></li>
                    <li className={styles['list-item']}><Link className={styles['link-it']} to={appRoutes.photos.path}>Photos</Link></li>
                    <li className={styles['list-item']}><Link className={styles['link-it']} to={appRoutes.contact.path}>Contacts</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav