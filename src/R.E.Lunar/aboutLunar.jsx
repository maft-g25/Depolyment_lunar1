import React, {Component} from 'react';

import styles from './style.module.css'
// import { Fade } from 'react-reveal';

function LAbout(props) {
    return(
    <div id='aboutref' className='{style.about_wrapper}'>
        <div className={styles.card_a_wrapper}> 
            <div className={styles.cover_about}>
                
                <p className={styles.head_about}>
                    {props.para1}
                </p>
                <p>{props.para2} </p>
                <p>{props.para3} </p>
                <p>{props.para4} </p>
                <p>{props.para5} </p>
            </div>
        </div>

    </div>
    );
}

export default LAbout;
