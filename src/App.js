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




    <div style={{height: "50px"}}></div>

    <Container>
      <WireRow>
      <WireCol>
       <MediaPlaceholder image caption="I am a caption" />
        </WireCol>
        <WireCol>
        <MediaPlaceholder avitar round/>
        </WireCol>
        <WireCol className="margin-auto"> 
        <MediaPlaceholder  video height="100px" caption="Another Caption" />
        </WireCol>
        <WireCol>
        <MediaPlaceholder image round />
        </WireCol>
      
      </WireRow>
      <TextPlaceholder headerLines={3} paraLines={20}/>
    </Container>


    <div style={{height: "500px"}}></div>
    </div>
  );
}



export default App;
