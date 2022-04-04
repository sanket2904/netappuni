import React, { useState, useEffect } from 'react';
import style from "../Styles/component5.module.css"
import flight from "../flight.svg"
import luggage from "../luggage_black_24dp.svg"
import delivery from "../delivery.svg"
import money from "../cash-outline.svg"
const data = [{
    key:1,
    title:"Hastle free travel",
    icon:flight,
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}, {
        key: 2,
        title: "Save luggage Space",
        icon: luggage,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }, {
        key: 3,
        title: "Doorstep Delivery",
        icon: delivery,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }, {
        key: 4,
        title: "Pocket Friendly",
        icon: money,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }]

export default class Component4 extends React.Component {
    render() {
        return (
            <section className={style.fifthSec}>
                <header className={style.fifthHeader}>
                    <h1>Why Choose Us?</h1>
                </header>
                <div className={style.fifthContent}>
                    {
                        data.map(element => <Card key={element.key} title={element.title} icon={element.icon} content={element.content} />)
                    }
                    
                </div>
            </section>
        )
    }
}



class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div className={style.fifthCard}>
                <div className={style.CardUpper}>
                    <img src={this.props.icon} alt="icon" />
                    <h2>{this.props.title}</h2>
                </div>
                <div className={style.CardLower}>
                    <p>{this.props.content}</p>
                </div>
            </div>
        )
    }
}