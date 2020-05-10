import React from 'react'
import styled from 'styled-components'

const StyledCol = styled.div`
    flex: ${props => props.width ? "0" : "1"} 0 ${props => props.width ? props.width : "0"};
    `;

function WireCol(props) {
    console.log(props);
    
    return (
        <StyledCol width={props.width} className="wire-col">
            {props.children}
        </StyledCol>
 
    )
}

export default WireCol
