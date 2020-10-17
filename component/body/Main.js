import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import MainBody from './MainBody'
import { Container, Row, Col } from 'reactstrap';

export default function body() {
    return (
        <>
            <Container>
                <Row>
                    <Col md="3">
                        <Sidebar />
                    </Col>
                    <Col md="9">
                        <MainBody />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
