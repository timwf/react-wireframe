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

    <Container>
      <WireRow>
        <WireCol >
        <TextPlaceholder headerLines={4} paraLines={2}/>
        </WireCol>  
        <WireCol >
        <TextPlaceholder headerLines={2} paraLines={4}/>
        </WireCol>  
      </WireRow>
    </Container>

    <MediaPlaceholder video caption="A caption if you want"/>
    <Container>
      <WireRow>
        <WireCol width="70%">
        <MediaPlaceholder  caption="A cap"/>
        </WireCol>


          <WireCol width="25%">
          <TextPlaceholder headerLines={1} paraLines={8}/>
          </WireCol>
      </WireRow>
    </Container>

    <Container>
      <WireRow>
        <WireCol >
        <TextPlaceholder  paraLines={10}/>
        </WireCol>  
        <WireCol >
        <TextPlaceholder headerLines={1} paraLines={7}/>
        </WireCol>  
        <WireCol >
        <TextPlaceholder headerLines={3} paraLines={4}/>
        </WireCol>  
      </WireRow>
    </Container>
    <div style={{height: "50px"}}></div>
  
    <Container >
    <WireRow>
    <WireCol >
    <MediaPlaceholder video caption="A caption if you want"/>
        </WireCol>  
        <WireCol >
          <TextPlaceholder headerLines={1} paraLines={4}/>
          <Button primary btnName="Contact"/>
        </WireCol>  
        </WireRow>
        <TextPlaceholder headerLines={1} paraLines={4}/>
    </Container>


    <div style={{height: "500px"}}></div>
    </div>
  );
}



export default App;
