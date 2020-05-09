import React from 'react';
import './App.scss';
import WireNavBar from './components/WireNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import WireNavbarLogo from './components/WireNavbarLogo';
import WireNavbarLink from './components/WireNavbarLink';
import Button from './components/Button';
import Container from './components/Container';
import NavItemsContainer from './components/NavItemsContainer'

function App() {
  return (
    <div className="App">
       <WireNavBar dark>
          <WireNavbarLogo />  
          <NavItemsContainer>
            <WireNavbarLink linkTag="About"/>
            <WireNavbarLink linkTag="Services" />
            <WireNavbarLink linkTag="Contact" />
            <WireNavbarLink linkTag="Extra" />
            <Button btnName="Contact"/>
          </NavItemsContainer>
       </WireNavBar>

       <WireNavBar >
       <WireNavbarLogo companyName="Logo Name"/>  
          <NavItemsContainer right >
            <WireNavbarLink linkTag="About"/>
            <WireNavbarLink linkTag="Services" />
            <WireNavbarLink linkTag="Contact" />
            <WireNavbarLink linkTag="Extra" />
            <Button btnName="Contact"/>
          </NavItemsContainer>
       </WireNavBar>

       <WireNavBar >
          <WireNavbarLogo companyName="Logo Name"/>  
          <WireNavbarLink linkTag="About"/>
          <WireNavbarLink linkTag="Services" />
          <WireNavbarLink linkTag="Contact" />
          <WireNavbarLink linkTag="Extra" />
          <Button btnName="Contact"/>
       </WireNavBar>
      <Container>
        <Button primary btnName="Contact"/>
        <Button btnName="About"/>
      </Container>
    
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}



export default App;
