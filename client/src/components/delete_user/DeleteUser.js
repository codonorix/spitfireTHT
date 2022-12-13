import React, {useState} from "react";
import axios from "axios";
import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";

import './DeleteUser.css'
export const DeleteUser = () => {
    const [id, setId] = useState(0)

    const changeID = (e) => {
        setId(e.target.value)
    }
    const removeUser = () => {
        let elements = ['user-deleted', 'delete-issue']

        for(let id in elements) {
            document.getElementById(elements[id]).style.display = 'none'
        }

        axios.delete('http://localhost:4000/delete_user', {
            data: {
                'id': id
            }
        })
            .then(res => {
                console.log(res.data)
                if(res.data) {
                    document.getElementById('user-deleted').style.display = 'block'
                }else{
                    document.getElementById('delete-issue').style.display = 'block'
                }
            })
    }

    return(
        <Container fluid>
            <Row>
                <Col id={'color-side'} md={4}></Col>
                <Col id={'info-side'}>
                    <h2>Remove a User</h2>
                    <br/>
                    <Alert key={'CREATE_ISSUE'} variant={'danger'} id={'delete-issue'}>
                        The user could not be deleted. Make sure they exist.
                    </Alert>
                    <Alert key={'success'} variant={'success'} id={'user-deleted'}>
                        User removed from Hubspot.
                    </Alert>
                    <Form id={'forms'}>
                        <Form.Control type="number" placeholder="User ID" onChange={(e) => changeID(e)}/><br/>
                    </Form>
                    <Button onClick={removeUser}>Submit</Button>
                </Col>
            </Row>
        </Container>
    )
}