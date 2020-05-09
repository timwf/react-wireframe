import React from 'react'
import styled from 'styled-components'

const Logo = styled.a`
    color: ${props => props.dark ? "white" : "black"};
    `;

WireNavbarLogo.defaultProps = {
    companyName: "WireFrame",
    dark: false  
}

function WireNavbarLogo(props) {
    console.log(props);
    
    return (
        <div className="logo-container">            
            <Logo dark={props.dark} href="#">{props.companyName}</Logo>
        </div>
    )
}

export default WireNavbarLogo
