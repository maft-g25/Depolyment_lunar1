import React, {useState} from "react";
import ListGroup from "./R.E.Lunar/ListGroup"
import L_Nav from "./R.E.Lunar/navbar";
import CardLunar from "./R.E.Lunar/CardLunar";
import styles from './R.E.Lunar/style.module.css'
import LAbout from "./R.E.Lunar/aboutLunar";
import LData from './LunarData';
import Footer from "./R.E.Lunar/footerL";


function App() {
  // return <div> <ListGroup /> </div>
const [footerData, setFooter] = React.useState(LData.data.footerData)

    const footer = footerData.map( item => {
        return (
            <Footer
                key={item.id}
                {...item}
                />
        )
    })
    

    return (
        <>
            <L_Nav/>
            <CardLunar/>
            <div className={styles.card_container}> 

                <h2 className={styles.card_container_h2}>
                    About US
                </h2>
                <LAbout />
            </div>
            {footer}

        </>
    );

}


export default App;
