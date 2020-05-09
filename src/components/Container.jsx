import React from 'react'
import styled from 'styled-components'

const StylaedCont = styled.div`
    color: ${props => props.dark ? "white" : "black"};
    margin: 0% ${props => props.margin};
    `;

Container.defaultProps = {
    margin: "5%"
}

function Container(props) {
    return (
    <StylaedCont margin={props.margin}>
          {props.children}
    </StylaedCont>    
    )
}

export default Container
