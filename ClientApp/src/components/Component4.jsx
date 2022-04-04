import React, { useState, useEffect } from 'react';
import style from "../Styles/component4.module.css"
import ill from "../1ill2-cropped.svg"

export default class Component4 extends React.Component {
    render() {
        return (
            <section className={style.fourthSec}>
                    <header className={style.bundlesSec}>
                        <h1>All you have to Do is make a Selection</h1>
                        <p>Unihelp Bundles Collection</p>
                    </header>
                    <section className={style.fourthContent}>
                        <Card />
                        <Card />
                        <Card style={{marginRight:"10%"}} />
                    </section>
            </section>
        )
    }
}


class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className={style.bundlesCard} style={this.props.style}>
                <div className={style.cardHeader}>
                    <h5>
                        Comforter Pack
                    </h5>
                </div>
                <div className={style.cardContent}>
                    <div className={style.cardImage}>
                    
                    </div>
                    <div className={style.cardDesc}>
                        <p style={{fontSize:"16px",fontWeight:"600"}}>A Sound Sleep is one of the most comforting things that people miss
                            when they go abroad. But Not You! Your UniAmigo is here for your rescue</p>
                    </div>
                </div>
                <div className={style.cardButton}>
                    <a>Explore Bundle</a>
                </div>
            </div>
        )
    }
}