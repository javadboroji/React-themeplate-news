import React from 'react'
import "./BodyNews.css"
import { Container, Row, Col } from 'reactstrap'
import Data from "../../data.json"
export default function BodyNews() {
    
    return (
        <>
        <Container className="mt-3">
            <Row>
                <Col md="12">
                    <ul style={{padding:0}}>
                        {Data.BodyNews.map((item,i)=>{
                            return(<li className="d-flex" className="pt-3 pb-2 d-flex item-body border-bottom" key={i}> 
                                <div> <img src={require("../../image/"+item.src) } alt="image"/></div>
                                <div className="pr-3  w-100"> 
                                    <h5 className="text-success text-center"><a href={"id="+i} >{item.title}</a> </h5>
                                    <p> {item.description}</p>
                                    
                                   
                                </div>
                            </li>)
                        })}
                    </ul>
                </Col>
            </Row>
        </Container>
        </>
    )
}
