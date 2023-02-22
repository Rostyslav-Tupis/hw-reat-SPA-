import React from "react";
import styles from '../home page/styleHome.module.css'

function HomePage(){
    return(
        <div className={styles['main-wrapper']}>
            <div className={styles['content-wrapper']}>
                <h1 className={styles['title']}>Alfa Romeo Giulia</h1>
                <div className={styles['text-container']}>
                    <div className={styles['text-parh1']}>
                        <p className={styles['text']} >The Alfa Romeo Giulia (Type 952) is a compact executive car produced by the Italian automobile manufacturer Alfa Romeo. It was unveiled in June 2015, with market launch scheduled for February 2016, and it is the first saloon offered by Alfa Romeo after the production of the 159 ended in 2011. The Giulia is also the first mass-market Alfa Romeo vehicle in over two decades to use a longitudinal rear-wheel drive platform, since the 75 which was discontinued in 1992. The Giulia was second in 2017 European Car of the Year voting and was named Motor Trend Car of the Year for 2018. In 2018, Giulia was awarded the Compasso d'Oro industrial design award.</p>
                    </div>

                    <div className={styles['text-parh2']}>
                        <h4 className={styles['history-title']}>History</h4>
                        <p className={styles['text']}>The car was designed at the Centro Stile Alfa Romeo, by a team headed by Marco Tencone and including Senior Exterior Designer, Andrea Loi. Along with Interior Chief Designer Inna Kondakova and Senior Interior Designer Manuele Amprimo. The Giulia has been the subject of a long gestation and delayed launch dates, reportedly due to the design being sent back to the drawing board by Sergio Marchionne, CEO of Fiat Chrysler Automobiles (FCA), the parent company of Alfa Romeo at the time.</p>
                    </div>
                </div>
                <div className={styles['photos']}>
                    <img className={styles['home-photo']} alt="car" src="https://www.aelita.ua/wp-content/uploads/2020/03/hp6ej4o489441h0iqqtmgmt1hn5d-1024x683.jpg">
                    </img>

                    <img className={styles['home-photo']} alt="car" src="https://images.ctfassets.net/uaddx06iwzdz/bXWPawlLrfZeFXxfSYj0V/0f9030dbffe99a67fd57b34d555cbb21/2KWPLXOvdIulaweTvN3Mc4-1ed72122d3bd22b0d133d4b3c6fa8d5d-Alfa_Romeo-Giulia-2020-1280-02-1100.jpg"></img>
                </div>
            </div>
        </div>
    )
}

export default HomePage;