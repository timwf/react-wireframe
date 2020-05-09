import React from 'react'
import styled from 'styled-components'

const Items = styled.a`
    color: ${props => props.dark ? "white" : "black"};
    `;

WireNavbarLink.defaultProps = {
    linkTag: "Item",
    dark: false  
}

function WireNavbarLink(props) {
    return (
        <Items dark={props.dark} href="#"className="nav-link">{props.linkTag}</Items>
    )
}

export default WireNavbarLink
