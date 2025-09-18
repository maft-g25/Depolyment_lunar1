import React, { Component } from 'react';

// import styles from '../style.css'
import styles from './style.module.css'

function Footer(props) {
    // console.log(props);

    return ( 
        <footer className={styles.footer}>
            {/* <small> @2024 Footer comes here .....All rights reserved </small> */}

            <div id='contact1' className={styles.wrapper_footer}>


                <div className={styles.location}>
                    <h3> {props.title2} </h3>
                    {/* <div className={styles.left_icon} >
                        <img src='location_yellow.png' />
                        <section> {props.location} 
                        </section>
                    </div> */}
                    <div className={styles.left_icon}> 
                        <img src='email-solid-yellow.svg' />
                        <p> {props.email} </p>
                    </div>
                    <div className={styles.left_icon}> 
                        <img src='phone-solid_yellow.svg'/>
                        <p> {props.phone} </p>
                    </div>
                    <div>
                        &copy;2025 Lunar - All trademarks are the property of their respective owners.
                    </div>
                </div>
            

            </div>


        </footer>
     );
}

export default Footer;