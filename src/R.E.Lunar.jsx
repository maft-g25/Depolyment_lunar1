import React, {useState} from "react";

import L_Nav from "./R.E.Lunar/navbar";
import CardLunar from "./R.E.Lunar/CardLunar";
import styles from './R.E.Lunar/style.module.css'
import LAbout from "./R.E.Lunar/aboutLunar";
import LData from './LunarData';
import Footer from "./R.E.Lunar/footerL";


function LunarApp() {
 
    const [footerData, setFooter] = React.useState(LData.data.footerData)

    const footer = footerData.map( item => {
        return (
            <Footer
                key={item.id}
                {...item}
                />
        )
    })
    //

    return (
        <>
            <L_Nav/>
            <CardLunar/>
            <div className={styles.card_container}> 
                
                {/* <h2 style={
                    {textAlign:'left', fontWeight:'600',fontSize:'2.7em',color:'#2C3E50',margin:'1em',textShadow:'10px 1px 20px black'}
                    }>
                    About US
                </h2> */}
                <h2 className={styles.card_container_h2}>
                    About US
                </h2>
                <LAbout />
            </div>
            {footer}

        </>
    );

}

export default LunarApp;

// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
