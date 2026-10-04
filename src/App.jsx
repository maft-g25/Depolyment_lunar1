import React, {useState} from "react";
import L_Nav from "./R.E.Lunar/navbar";
import CardLunar from "./R.E.Lunar/CardLunar";
import styles from './R.E.Lunar/style.module.css'
import LAbout from "./R.E.Lunar/aboutLunar";
import LServices from "./R.E.Lunar/services";
import LData from './LunarData';
import Footer from "./R.E.Lunar/footerL";
// import ContactForm from "./R.E.Lunar/ContactForm";
import Modal from "./R.E.Lunar/Modal";

import Contact from "./components/ContactAjax";

function App() {
  // return <div> <ListGroup /> </div>
  const [aboutData, setAbout] = React.useState(LData.data.AboutData)
  const [serviceData, setService] = React.useState(LData.data.ServiceData)
const [footerData, setFooter] = React.useState(LData.data.footerData)

    const about = aboutData.map ( item => {
        return (
            <LAbout
                key={item.id}
                {...item}
            />
        )
    })
     const service = serviceData.map ( item => {
        return (
            <LServices
                key={item.id}
                {...item}
            />
        )
    })
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
                {about}
                <h2 className={styles.card_container_h2}>
                    Our Services 
                </h2>
                {service}
            </div>
            {footer}

        </>
    );

}
export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////
// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
//       <div className="bg-white rounded-lg shadow-xl p-8 max-w-md">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">
//           🎉 Tailwind CSS is Working!
//         </h1>
//         <p className="text-gray-600 mb-6">
//           Your React + Tailwind setup is complete and ready to use.
//         </p>
//         <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
//           Get Started
//         </button>
//       </div>
//     </div>
//   )
// }

// export default App;