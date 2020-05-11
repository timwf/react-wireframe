import React from 'react'
import styled from 'styled-components'

const StylaedCont = styled.div`

    `;

Container.defaultProps = {
    margin: "5%"
}

function Container(props) {
    console.log(props);
    
    return (
    <StylaedCont className={'container-main ' + props.className}>
          {props.children}
    </StylaedCont>    
    )
}

export default Container
