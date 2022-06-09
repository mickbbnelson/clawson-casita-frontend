import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    .navbar {
      background-color: #C2B280  
    }

    .navbar-brand, .navbar-nav .nav-link {
       color: #bbb;
       margin-left: 5px
    }

    .navbar-brand, .navbar-nav .nav-link:hover {
        color: white  
     }

`;

const Header = () => {
    return(
        <Styles>
            <Navbar expand='1g'>
                <Navbar.Brand href="/">Mick Nelson </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/">Front House</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/b">Back House</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}

export default Header