import React from 'react'
import SliderNews from './SliadeNews'
import { Container, Row, Col } from 'reactstrap'
import BodyNews from './BodyNews';



export default function MainBody() {
    return (
        <>
            <Container  className="pt-3">
                <Row>
                    <Col md="12">
                    <SliderNews />
                    </Col>
                    
                </Row>
                <Row>
                    <BodyNews />
                   
                </Row>
            </Container>
        
        </>
    )
}
