import React from 'react'
import styled from 'styled-components'

const ItemsContainer = styled.div`
    justify-content: ${props => props.right ? "flex-end" : "flex-start"};
    `;



function NavItemsContainer(props) {
    return (
        <ItemsContainer right={props.right} className="nav-items-container">
             {props.children}
        </ItemsContainer>

    )
}

export default NavItemsContainer
