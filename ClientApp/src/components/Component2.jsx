import React, { useState, useEffect } from 'react';
import style from "../Styles/component2.module.css"
import ill from "../1ill2-cropped.svg"

export default class Component1 extends React.Component {
    render() {
        return (
            <section className={style.secondsec}>
                <div className={style.contentsec}>
                    <section className="innerContent">
                        <h1>
                            Who Are We?
                        </h1>
                        <p>
                            Our Journey began when two amigos who met at Cardiff
                            University, UK; realised that they can help fellow students get rid of the
                            stress that comes when you are moving countries for your studies. From
                            bedding to linen,from crockery to stationery, all your Uni-Requirements
                            will be taken care of!
                        </p>
                        <div className={style.buttons}>
                            
                            <button>Know more</button>
                        </div>
                        <div className={style.illustration2}>
                            <img src={ill} alt="illustration" style={{maxWidth:"280px",marginTop:"50px"}} />
                        </div>

                    </section>

                </div>
                
            
            </section>
        )
    }
}

