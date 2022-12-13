import React, {useState} from "react";
import axios from "axios";
import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";

export const DeleteUser = () => {
    const [id, setId] = useState(0)

    const changeID = (e) => {
        setId(e.target.value)
        console.log(e.target.value)
    }
    const removeUser = () => {
        axios.delete('http://localhost:4000/delete_user', {
            data: {
                'id': id
            }
        })
            .then(res => {
                console.log(res.data)
            })
    }

    return(
        <Container fluid>
            <Row>
                <Col id={'color-side'} md={4}></Col>
                <Col id={'info-side'}>
                    <h2>Remove a User</h2>
                    <br/>
                    <Form id={'forms'}>
                        <Form.Control type="number" placeholder="User ID" onChange={(e) => changeID(e)}/><br/>
                    </Form>
                    <Button>Submit</Button>
                </Col>
            </Row>
        </Container>
    )
}