import React, {Component, useState} from 'react';

import Contact from '../components/ContactAjax';
import Modal from './Modal';

import styles from './style.module.css'
// import { Fade } from 'react-reveal';

function LServices(props) {
     const [open, setOpen] = useState(false);

    return(
    <div id='aboutref' className='{style.service_wrapper}'>
        <div className={styles.card_a_wrapper_service}> 
            <div className={styles.cover_service}>
                
                <p className={styles.overline}>{props.service1} </p>
                <p className={styles.overline}>{props.service2} </p>
                <p className={styles.overline}>{props.service3} </p>
                <p className={styles.overline}>{props.service4} </p>
        </div>
            <p className={styles.service1}>{props.slogan1} </p>
        </div>
        <div className={styles.wrapper_HowCan}>
            <div className={styles.card_wrapper_howCan}>
            <div style={{width: ".4em", height: "150px", background: "#efc10b"}} ></div>
                <div className={styles.service_inner_wrapper}>
                    <p>How can we help?</p>
                    <p>send us a message</p>
                    {/* <button className={`${styles.btn_primary} btn btn-primary`}> contuct us </button> */}
                    <div>
                    <button onClick={() => setOpen(true)} className={styles.btn_primary}> Contuct us </button>
                        <Modal open={open} onClose={() => setOpen(false)}>
                        <h2>Contact Us</h2>
                        <Contact onSuccess={() => setOpen(false)} />
                        </Modal>
                    </div>    
                </div>
            </div>
            <div className={styles.card_wrapper_howCan_2}>
            <div style={{width: ".4em", height: "150px", background: "#efc10b"}}></div>
                <div className={styles.flex_right}>
                    <p>To redefine the boundaries of ambition</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default LServices;
