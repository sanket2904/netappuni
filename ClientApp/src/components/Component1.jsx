import React, { useState, useEffect } from 'react';
import style from "../Styles/component1.module.css"
import illustration from "../Group2ill.svg"

export default class Component1 extends React.Component {
    render() {
       return(
           <section className={style.firstsec}>
               <div className={style.content}>
                   <section className="innerContent">
                       <h1>
                           We help you settle
                       </h1>
                       <p>
                           We are here to Settle you right in and turn your new house across seas into your home.
                       </p>
                       <div className={style.buttons}>
                           <button>
                               Bundles
                           </button>
                           <button>Marketplace</button>
                       </div>
                       <div className={style.compill1}>
                        <img src={illustration} alt="Illustration" />
                       </div>
                       
                   </section>
                   
               </div>
               <div className={style.mediasec}>

               </div>
           </section>
       )
    }
}

