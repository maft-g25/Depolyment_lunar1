import React, { Component } from 'react';

import styles from './style.module.css'

function CardLunar() {
    return ( 
        <>
            <div className={styles.cover1} >
              <div className={styles.backcolor}> </div>  

              <div className={styles.box11 } >
	              <div className={styles.txt1} >
                    <p>Lunar <br /><span className={styles.electr} > RealEstates </span> <br /> 
                    <span className={styles.subtxt}> Here When Need us. </span>  </p>
	              </div> 
	            </div>

              <div className={styles.box2 } >
	              <div className={styles.img} >
                    {/* coming Soon */}
                    <img src="IMG_20.jpg" />
	              </div> 
	            </div>

              <div className={styles.box1 }>
	              <div className={styles.txt2} >
                    Real Estates Construction.

	              </div> 
	            </div>

            </div>
        </>
     );
}

export default CardLunar;