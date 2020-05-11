import React from 'react'
import styled from 'styled-components'

const StyledCol = styled.div`
    flex: ${props => props.width ? "0" : "1"} 0 ${props => props.width ? props.width : "0"};
    @media (max-width: 768px) {
        flex: ${props => props.mobileWidth ? "0" : "1"} 0 ${props => props.mobileWidth ? props.mobileWidth : props.width};
      }
    `;

function WireCol(props) {
    return (
        <StyledCol 
            width={props.width}
            mobileWidth={props.mobileWidth} 
            className={'wire-col ' + props.className}
        >
            {props.children}
        </StyledCol>
 
    )
}

export default WireCol
