import React, {useEffect, useState} from "react";
import axios from "axios";
import {UserProfile} from "../user_profile/UserProfile";
import {Col, Container, Row} from "react-bootstrap";

export const HomePage = () => {
    const [users, setUsers] = useState([])
    // const generateData = () => {
    //
    //     axios.get('http://localhost:4000/')
    //         .then(res => {
    //             console.log(res.data)
    //             setUsers(res.data)
    //         })
    // }

    useEffect(() => {
        axios.get('http://localhost:4000/')
            .then(res => {
                console.log(res.data)
                setUsers(res.data)
            })
    }, [])

    return (
        <Container fluid>
            <Row>
                {/*<button onClick={generateData}>Generate Data</button>*/}
                {users.map((data) => {
                    // console.log(data)
                    return (
                        <UserProfile
                            fname={data.properties.firstname}
                            lname={data.properties.lastname}
                            id={data.id}
                            email={data.properties.email}
                            join={data.properties.createdate}
                        />

                        // <h1>{data.id}</h1>
                    )
                })}
            </Row>
        </Container>
    )
}