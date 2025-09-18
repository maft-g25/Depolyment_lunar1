import React, {Component} from 'react';

import styles from './style.module.css'
import { Fade } from 'react-reveal';

function LAbout() {
    return(
    <div id='aboutref' className='{style.about_wrapper}'>


            <div className={styles.card_a_wrapper}> 
                <div className={styles.cover_about}>
                    
                    <p className={styles.head_about}>
                        Welcome to Lunar Estates!
                    </p>
                    <p>LunarEstates builds homes & neighbourhoods across Lusaka.
                        Our passion and purpose is to build quality homes, strengthen communities, and make lasting positive difference to people's lives.
                    </p>
                    <p>Our entrepreneurial spirit and dedication to great design and architecture is as present today as when we begun.</p>
                    <p>Through our projects and partnerships we both enhance community life and transform urban landscapes.It's the Lunar way.</p>
                    <p>If you need more than just a house, we add our unique architecture, art design. </p>

                </div>
              </div>

    </div>
    );
}

export default LAbout;
