import React from "react";
import styles from '../photos page/stylephotos.module.css'

function Photos(){
    return(
        <div className={styles['wrapper']} >
            <div className={styles['all_photos']}>

                <div className={styles['image']}>
                    <img src="https://pbs.twimg.com/media/Fkanl9XWYAAO9UR?format=jpg&name=medium" alt="car" className={styles['image__img']}></img>
                    <div className={styles['image__overlay']}>
                        <h2 className={styles['image__title']}>Alfa Romeo Giulia SWB Zagato</h2>
                    </div>
                </div>
                <div className={styles['image']}>
                    <img src="https://pbs.twimg.com/media/FkB9pG_XgAEOdmF?format=jpg&name=medium" alt="car" className={styles['image__img']}></img>
                    <div className={styles['image__overlay']}>
                        <h2 className={styles['image__title']}>Alfa Romeo Tonale </h2>
                    </div>
                </div>
                <div className={styles['image']}>
                    <img src="https://pbs.twimg.com/media/FeUHCGSX0A4BiQo?format=jpg&name=medium" alt="car" className={styles['image__img']}></img>
                    <div className={styles['image__overlay']}>
                        <h2 className={styles['image__title']}>Alfa Romeo Stelvio </h2>
                    </div>
                </div>
                <div className={styles['image']}>
                    <img src="https://pbs.twimg.com/media/Fd50wB8XgAgMGgK?format=jpg&name=medium" alt="car" className={styles['image__img']}></img>
                    <div className={styles['image__overlay']}>
                        <h2 className={styles['image__title']}>Alfa Romeo Giulia</h2>
                    </div>
                </div>
                <div className={styles['image']}>
                    <img  alt="car" src="https://hips.hearstapps.com/hmg-prod/images/2023-alfa-romeo-giulia-quadrifoglio-101-1667326905.jpg?crop=0.742xw:0.834xh;0.0545xw,0.135xh&resize=640:*" className={styles['image__img']}></img>
                    <div className={styles['image__overlay']}>
                        <h2 className={styles['image__title']}>Alfa Romeo Giulia Quadrifoglio</h2>
                    </div>
                </div>
                <div className={styles['image']}>
                    <img src="https://www.alfaromeo.ua/wp-content/uploads/2021/12/news_20211210.jpg" alt="car" className={styles['image__img']}></img>
                    <div className={styles['image__overlay']}>
                        <h2 className={styles['image__title']}>Alfa Romeo Giulia GTAm</h2>
                    </div>
                </div>
                <div className={styles['image']}>
                    <img src="https://car-images.bauersecure.com/wp-images/4795/alfaromeogiuliaelectric1.jpg" alt="car" className={styles['image__img']}></img>
                    <div className={styles['image__overlay']}>
                        <h2 className={styles['image__title']}>Alfa Romeo Giulia electric</h2>
                    </div>
                </div>
                <div className={styles['image']}>
                    <img alt="car" src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Alfa_Romeo_Spider_Junior_1300_(1968)_(14260594357).jpg" className={styles['image__img']}></img>
                    <div className={styles['image__overlay']}>
                        <h2 className={styles['image__title']}>Alfa Romeo Spider</h2>
                    </div>
                </div>
                <div className={styles['image']}>
                    <img src="https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2023/02/07091921/FoWm7RJXsAICjn-.jpeg" alt="car" className={styles['image__img']}></img>
                    <div className={styles['image__overlay']}>
                        <h2 className={styles['image__title']}>Alfa Romeo F1</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photos;