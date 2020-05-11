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
import TextPlaceholder from './components/TextPlaceholder';

function App() {
  return (
    <div className="App">
       <WireNavBar  >
         <Container>
          <WireNavbarLogo companyName="Logo Name"/>  
            <NavItemsContainer >
              <WireNavbarLink linkTag="About"/>
              <WireNavbarLink linkTag="Services" />
              <WireNavbarLink linkTag="Contact" />
              <WireNavbarLink linkTag="Extra" />
              <Button primary btnName="Contact"/>
            </NavItemsContainer>
         </Container>
       </WireNavBar>


  
    <Container className="margtop-5">
    <MediaPlaceholder height="400px" video caption="I am a caption" />
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




    <div style={{height: "50px"}}></div>

    <Container>
      <WireRow>
        <WireCol width="50%" mobileWidth="50%">
          <MediaPlaceholder height="200px" image caption="I am a caption" />
        </WireCol>
        <WireCol mobileWidth="50%">
          <MediaPlaceholder avitar round/>
        </WireCol>
        <WireCol className="margin-auto" mobileWidth="50%"> 
          <MediaPlaceholder  video height="100px" caption="Another Caption" />
        </WireCol>
        <WireCol width="25%" mobileWidth="50%">
          <MediaPlaceholder  round />
        </WireCol>      
      </WireRow>
    </Container>

    <Container className="margtop-5">
    <h3 className="margin-auto">Mobile</h3>
      <WireRow className="margtop-1">
      <WireCol mobileWidth="100%">
          <MediaPlaceholder avitar  round />
        </WireCol>   
        <WireCol className="margin-auto" width="70%">
            <TextPlaceholder headerLines={2} paraLines={3}/>
        </WireCol>   
      </WireRow>
    </Container>

    <Container className="margtop-1">
 
      <WireRow>
        <WireCol  width="50%" mobileWidth="100%">
            1 of 4
        </WireCol>   
        <WireCol >
            2 of 4
        </WireCol>   
        <WireCol width="50%">
            3 of 4
        </WireCol>   
        <WireCol >
            4 of 4
        </WireCol>  
      </WireRow>
    </Container>


    <div style={{height: "500px"}}></div>
    </div>
  );
}



export default App;
