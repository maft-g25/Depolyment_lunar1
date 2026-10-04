import React, { Component } from 'react';

import styles from './style.module.css'

function L_Nav() {
    return ( 
        <>
            <div className={styles.navbar1} >
                <h2>  <span className={styles.logo_txt}> Lunar Estates</span> <span className={styles.sub_logo}> Construction </span> </h2>

                <ul className={styles.ul }>
                    <li className={styles.nav_item }>
                        <a className={styles.nav_link} href="#">
                            <img src="house-solid.svg" />
                            <div id="Homee" className={styles.nav_txt}> Home <span className={styles.sr_only}> </span> </div>
                        </a>
                    </li>
                    <li className={styles.nav_item}>
                        <a className={styles.nav_link} href="#aboutref">
                            <img src="user-regular.svg" alt="User Icon"/> 
                             <div className={styles.nav_txt}> About </div>
                        </a>
                    </li>
                    {/* <li className={styles.nav_item}>
                        <a className={styles.nav_link} href="#">
                            <img src="gear-solid.svg" />
                            <div className={styles.nav_txt}>  Services</div> 
                        </a>
                    </li> */}
                    {/* <li className={styles.nav_item}>
                        <a className={styles.nav_link} href="#">
                            <img src="star-regular.svg " />
                            <div className={styles.nav_txt}>  Testimonials</div> 
                        </a>
                    </li> */}
                    {/* <li className={styles.nav_item}> 
                        <a className={styles.nav_link} href="#">
                            <img src="question-solid.svg " className={styles.nav_img_faq} />
                            <div className={styles.nav_txt}> FAQ</div> 
                        </a>
                    </li> */}
                    <li className={styles.nav_item}>
                        {/* <a className={`${styles.nav_link} flex items-center gap-2`} href="#contact1"> */}
                        <a className={styles.nav_link} href="#contact1">
                          <img src="phone-solid.svg" alt="Contact Icon" />
                          <div className={styles.nav_txt}>Contact</div>
                        </a>
                    </li>
                
                </ul>
            </div>
        </>
     );
}

export default L_Nav;