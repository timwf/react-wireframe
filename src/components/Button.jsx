import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
    color: ${props => props.primary ? "white" : "black"};
    background: ${props => props.primary ? "grey" : "#d8d8d8"  };
    `;

Button.defaultProps = {
    btnName: "Button",
    primary: false  
}

function Button(props) {
    return (
  
        <StyledButton primary={props.primary} className="wireframe-btn">{props.btnName}</StyledButton>

    )
}

export default Button
