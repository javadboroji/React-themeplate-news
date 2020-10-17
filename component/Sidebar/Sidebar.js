import React from 'react';
import "./sidebar.css"
import SidebareSport from './SiadebarSport'
import SidebarLastNews from './SidebarLastNews'
import SidebarWorldNews from './SidebarWorldNews'
import { Container, Row } from 'reactstrap'

export default function Sidebar() {
    return (
        <>
        <Container className="pt-3">
            <Row>
            <SidebareSport />
          
            </Row>
            <Row>
            <SidebarLastNews />
            </Row>
            <Row>
            <SidebarWorldNews />
            </Row>
        </Container>
           
        </>
    )
}
