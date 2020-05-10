import React from 'react';
import './App.scss';
import WireNavBar from './components/WireNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Row, Col} from 'react-bootstrap'
import WireNavbarLogo from './components/WireNavbarLogo';
import WireNavbarLink from './components/WireNavbarLink';
import Button from './components/Button';
import Container from './components/Container';
import NavItemsContainer from './components/NavItemsContainer'
import MediaPlaceholder from './components/MediaPlaceholder';
import WireRow from './components/WireRow'
import WireCol from './components/WireCol'

function App() {
  return (
    <div className="App">
       <WireNavBar >
         <Container>
          <WireNavbarLogo companyName="Logo Name"/>  
            <NavItemsContainer right >
              <WireNavbarLink linkTag="About"/>
              <WireNavbarLink linkTag="Services" />
              <WireNavbarLink linkTag="Contact" />
              <WireNavbarLink linkTag="Extra" />
              <Button primary btnName="Contact"/>
            </NavItemsContainer>
         </Container>
       </WireNavBar>


  
    <Container>
    <MediaPlaceholder video caption="I am a caption" />
    </Container>

    <Container>
      <WireRow>
        <WireCol >
        <MediaPlaceholder />
        </WireCol>  
        <WireCol >
        <MediaPlaceholder video caption="A caption if you want"/>
        </WireCol>   
      </WireRow>
    </Container>


    </div>
  );
}



export default App;
