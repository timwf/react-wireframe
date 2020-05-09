import React from 'react'
import styled from 'styled-components'

const Logo = styled.a`
    background: ${props => props.dark ? "green" : "yellow"};
    `;

WireNavbarLogo.defaultProps = {
    companyName: "WireFrame",
    dark: true
  
}

function WireNavbarLogo(props) {
    console.log(props);
    
    return (
        <div>            
            <Logo href="#">{props.companyName}</Logo>
        </div>
    )
}

export default WireNavbarLogo
