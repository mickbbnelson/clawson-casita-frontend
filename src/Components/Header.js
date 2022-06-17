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

    .fa {
        padding: 20px;
        font-size: 30px;
        width: 50px;
        text-align: center;
        text-decoration: none;
    }

    .fa:hover {
        opacity: 0.7;
    }

    .fa-instagram {
        background: #C2B280 ;
        color: black;
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
                        <Nav.Item><Nav.Link href="/fronthouse">Front House</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/backhouse">Back House</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/neighborhood">The Neighborhood</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/austin">Austin</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/hillcountry">Hill Country</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/reservations">Revervations</Nav.Link></Nav.Item>
                        <a href="https://www.instagram.com/clawsoncasita/?hl=en" target='_blank' className="fa fa-instagram"></a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}

export default Header