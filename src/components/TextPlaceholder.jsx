import React from 'react'
import styled from 'styled-components'

const HeaderWords = []
const paraWords = []

const StyledHeader = styled.div`
    height: 42px;
    background-color: grey;
    margin: 5px;
    `;

const StyledHeaderContainer = styled.div`
    max-height: ${props => props.headerLines ? props.headerLines* 48 : "52"}px;
    overflow: hidden;
    margin-bottom: 20px;
    display: ${props => props.headerLines ? "inline-flex" : "none"};
`;

const StyledPara = styled.div`
    height: 16px;
    background-color: grey;
    margin: 5px;
    `;

const StyledParaContainer = styled.div`
    max-height: ${props => props.paraLines ? props.paraLines*26 : "0"}px;
    overflow: hidden;
`;





function TextPlaceholder(props) {
   
    for (let index = 0; index < props.headerLines*10; index++) {        
         HeaderWords.push(<StyledHeader style={{width: Math.floor(Math.random() * (180) + 50)}}/>)
    }    

    for (let index = 0; index < props.paraLines*10; index++) {        
        paraWords.push(<StyledPara style={{width: Math.floor(Math.random() * (100) + 20)}}/>)
   }    
    

    return (
        <>
        {HeaderWords ? 
        <StyledHeaderContainer headerLines={props.headerLines}className="text-placeholder-container">  
            {HeaderWords}            
        </StyledHeaderContainer>:  null}

        <StyledParaContainer paraLines={props.paraLines}className="text-placeholder-container">  
        {paraWords}
        </StyledParaContainer>
</>

    )
}

export default TextPlaceholder
