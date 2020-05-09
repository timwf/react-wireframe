import React from 'react';
import './App.scss';
import WireNavBar from './components/WireNavBar';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import WireNavbarLogo from './components/WireNavbarLogo';
import WireNavbarLink from './components/WireNavbarLink';

function App() {
  return (
    <div className="App">
       <WireNavBar dark>
          <WireNavbarLogo />  
          <WireNavbarLink linkTag="About"/>
          <WireNavbarLink linkTag="Services" />
          <WireNavbarLink linkTag="Contact" />
       </WireNavBar>
    </div>
  );
}


export default App;
