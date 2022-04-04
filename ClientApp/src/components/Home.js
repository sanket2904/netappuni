import React, { Component } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component4  from "./Component4";
import Component5 from "./Component5"
import Topbar from "./Topbar"
import style from "../Styles/mainHome.module.css"
export default class Home extends Component {
    static displayName = Home.name;

    render() {
        return(
            <>
            <div className={style.main}>
                    <Topbar />
                    <Component1 />
                    <Component2 />
                    <Component4 />
                    <Component5 />
            </div>
                
            </>
        )
    
    }
}

