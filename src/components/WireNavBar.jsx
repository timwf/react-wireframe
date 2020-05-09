import React, {} from 'react'
import styled from 'styled-components'

const Nav = styled.div`
    background: ${props => props.dark ? "grey" : "white"};
    `;



WireNavBar.defaultProps = {
    dark: false
}

export default function WireNavBar(props) {
    console.log(props);
    
    return (
        <div>
        <Nav dark={props.dark} className="nav-bar">
             {React.Children.map(props.children, (child => React.cloneElement(child, { dark: props.dark })))}
        </Nav>
        </div>

    )
}
