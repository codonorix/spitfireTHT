import React, {useState} from "react";
import axios from "axios";
import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";

import './AddUser.css'

export const AddUser = () => {
    const [userObj, setUserObj] = useState({
        'fname': '',
        'lname': '',
        'email': '',
        'idnum': 0,
        'bday': ''
    })

    const changeEmail = (e) => {
        let obj = userObj
        obj.email = e.target.value
        setUserObj(obj)
    }
    const changeFname = (e) => {
        let obj = userObj
        obj.fname = e.target.value
        setUserObj(obj)
    }

    const changeLname = (e) => {
        let obj = userObj
        obj.lname = e.target.value
        setUserObj(obj)
    }

    const changeID = (e) => {
        let obj = userObj
        obj.idnum = e.target.value
        setUserObj(obj)
    }

    const changeBday = (e) => {
        let obj = userObj
        obj.bday = e.target.value
        console.log(obj)
        setUserObj(obj)
    }

    const addUser = () => {
        let invalid = false

        if (userObj.idnum.length !== 13) {
            document.getElementById('id-issue').style.display = 'block'
            invalid = true
        }
        if(!checkEmail()) {
            document.getElementById('email-issue').style.display = 'block'
            invalid = true

        }
        if(!checkBday()) {
            document.getElementById('bday-issue').style.display = 'block'
            invalid = true
        }

        if(invalid)return

        axios.post('http://localhost:4000/create_user', userObj)
            .then(res => {
                console.log(res.data)
            })
    }

    const checkEmail = () => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(userObj.email).toLowerCase());
    }

    const checkBday = () => {
        let splitDate = userObj.bday.split("-")
        let newDate = new Date(userObj.bday)
        console.log(newDate)

        if(newDate > new Date())
            return false

        return true
    }
    // First Name, Last Name, Email, ID Number and Birthday
    return (
        <Container fluid>
            <Row>
                <Col id={'color-side'} md={4}></Col>
                <Col id={'info-side'}>
                    <h2>Add a User</h2>
                    <br/>
                    <Form id={'forms'}>
                        <Alert key={'EMAIL_ISSUE'} variant={'danger'} id={'email-issue'}>
                            You have entered an invalid email.
                        </Alert>
                        <Form.Control type="email" placeholder="email address" onChange={(e) => changeEmail(e)}/><br/>
                        <Form.Control type="text" placeholder="First Name" onChange={(e) => changeFname(e)}/><br/>
                        <Form.Control type="text" placeholder="Last Name" onChange={(e) => changeLname(e)}/><br/>
                        <Alert key={'ID_NUM_ISSUE'} variant={'danger'} id={'id-issue'}>
                            Your ID number has to be 13 digits long.
                        </Alert>
                        <Form.Control type="number" placeholder="ID Number" onChange={(e) => changeID(e)}/><br/>
                        <Alert key={'BDAY_ISSUE'} variant={'danger'} id={'bday-issue'}>
                            You can't be born in the future.
                        </Alert>
                        <Form.Control type="date" placeholder="Birthday" onChange={(e) => changeBday(e)}/><br/>
                    </Form>
                    <Button onClick={addUser}>Submit</Button>
                </Col>
            </Row>
        </Container>
    )
}