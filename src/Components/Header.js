import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Styles = styled.div`
    .navbar {
      background-color: #C2B280  
    }

    .navbar-brand, .navbar-nav .nav-link {
       color: black;
       margin-left: 5px
    }

    .navbar-brand, .navbar-nav .nav-link:hover {
        color: black  
     }

`;

const Header = () => {
    return(
        <Styles>
            <Navbar expand='1g'>
                <Navbar.Brand href="/">Clawson Casita</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/">About</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/b">Front House</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/c">Back House</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/d">The Neighborhood</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/e">Austin</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/f">Hill Country</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/g">Revervations</Nav.Link></Nav.Item>
                        <a href="/h" target='_blank'>Instagram</a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}

export default Header