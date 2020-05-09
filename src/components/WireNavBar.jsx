import React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
    background: ${props => props.dark ? "black" : "white"};
    `;



WireNavBar.defaultProps = {
    dark: false
}

export default function WireNavBar(props) {
    console.log(props);
    
    return (
        <Nav dark={props.dark} className="nav-bar">
            {React.cloneElement(props.children)}

        </Nav>
    )
}
