import React, { useState, useEffect } from 'react';
import style from "../Styles/topbar.module.css"
import sssvg from "../UniHelpLogo-cropped.svg"
import menu from "../menu_black_24dp.svg"
export default class Component1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {show:false}
    }
    render() {


        if(window.innerWidth < 768) {
            if(this.state.show) {
                return (
                    <section className={style.topbar}>
                        <ul className={style.barlist}>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li>
                                <a href="">Explore Bundles</a>
                            </li>
                            <li>
                                <a href="">Explore Marketplace</a>
                            </li>
                        </ul>
                    </section>
                )
            }
            else {  
                return(
                    <section className={style.topbar}>
                        <div className={style.toplogo}>
                            <img src={sssvg} alt="logo"  />
                        </div>
                        <div className={style.barsolid}>
                            <img src={menu} alt="menu"  className={style.barsolid} />
                        </div>
                    </section>
                )
            }
            
        }
        else {
            return (



                <section className={style.topbar}>
                    <ul className={style.barlist}>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About Us</a>
                        </li>
                        <li>
                            <a href="">Explore Bundles</a>
                        </li>
                        <li>
                            <a href="">Explore Marketplace</a>
                        </li>
                    </ul>
                </section>
            )
        }
        
    }
}

