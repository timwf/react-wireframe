import React from 'react'
import styled from 'styled-components'

const StylaedCont = styled.div`

    `;

Container.defaultProps = {
    margin: "5%"
}

function Container(props) {
    return (
    <StylaedCont className="container-main" margin={props.margin}>
          {props.children}
    </StylaedCont>    
    )
}

export default Container
