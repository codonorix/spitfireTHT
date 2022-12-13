import React from "react";
import {Col} from "react-bootstrap";

import one from './default_ava/1.png'
import two from './default_ava/2.png'
import three from './default_ava/3.png'
import four from './default_ava/4.png'
import five from './default_ava/5.png'
import six from './default_ava/6.png'
import seven from './default_ava/7.png'

import './UserProfile.css'


export const UserProfile = (props) => {
    let default_ava = [one, two, three, four, five, six, seven]
    let img = default_ava[Math.floor(Math.random() * default_ava.length)]
    /*
    id
    email
    firname
    lasname
     */

    const displayDetails = () => {

    }

    return (
        <Col md={3} key={props.id}>
            <div className={'info'}>
                <img src={img} alt={''}/>
                <br/>
                <br/>
                <h5><span className={'gold-text'}>{props.id}.</span> {props.fname} {props.lname}</h5>
                <div className={'dropdown'}>
                    <strong className={'gold-text'}>📩 Email 📩</strong>
                    <br/>
                    {props.email}
                    <hr/>
                    <strong className={'gold-text'}>📆 Join Date 📆</strong>
                    <br/>
                    {props.join.substring(0, 10)}
                </div>
            </div>
        </Col>
    )
}