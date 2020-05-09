import React from 'react';
import './App.scss';
import WireNavBar from './components/WireNavBar';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import WireNavbarLogo from './components/WireNavbarLogo';

function App() {
  return (
    <div className="App">
        <WireNavBar dark>
          <WireNavbarLogo />          
        </WireNavBar>
    </div>
  );
}

export default App;
