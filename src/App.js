import React from 'react';
import './App.scss';
import WireNavBar from './components/WireNavBar';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import WireNavbarLogo from './components/WireNavbarLogo';
import WireNavbarLink from './components/WireNavbarLink';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
       <WireNavBar dark>
          <WireNavbarLogo />  
          <WireNavbarLink linkTag="About"/>
          <WireNavbarLink linkTag="Services" />
          <WireNavbarLink linkTag="Contact" />
          <WireNavbarLink linkTag="Extra" />
          <Button btnName="Contact"/>
       </WireNavBar>

       <WireNavBar >
          <WireNavbarLogo />  
          <WireNavbarLink linkTag="About"/>
          <WireNavbarLink linkTag="Services" />
          <WireNavbarLink linkTag="Contact" />
          <WireNavbarLink linkTag="Extra" />
          <Button btnName="Contact"/>
       </WireNavBar>

       <Button primary btnName="Contact"/>
       <Button btnName="About"/>
    </div>
  );
}


export default App;
