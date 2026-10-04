import React, { Component, useState } from 'react';
import Contact from '../components/ContactAjax';

import styles from './style.module.css'

function CardLunar() {

    return ( 
        <>
            <div className={styles.cover1} >
              <div className={styles.backcolor}> </div>

              <div className={styles.box11 } >
	              <div className={styles.txt1} >
                    <p>Lunar <br /><span className={styles.electr} > Construction </span> <br /> 
                    <span className={styles.subtxt}> Here When Need us. </span>  
                    {/* <button 
                      className="bg-yellow-500 text-white px-2 font-semibold rounded text-sm md:text-lg lg:text-2xl
                    hover:bg-yellow-700">
                      Contact us 
                    </button> */}
                    </p>  
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
                    <img src="cons-pic-1.jpg" />

	              </div> 
	            </div>

            </div>
            <div className={styles.Headline_txt}>
                <p>Trusted partners committed to delivering our clients’ vision</p>
            </div>
        </>
     );
}

export default CardLunar;
