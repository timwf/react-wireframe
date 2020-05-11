import React from 'react'
import styled from 'styled-components'
import Image from "../component-images/image-placeholder.png"
import Video from "../component-images/video-placeholder.png"
import Avitar from "../component-images/avitar-placeholder.png"


const ImageContainer = styled.div`
    ${props => props.image && ({backgroundImage: `url(${Image})`})};
    ${props => props.video && ({backgroundImage: `url(${Video})`})};
    ${props => props.avitar && ({
        backgroundImage: `url(${Avitar})`,
        backgroundSize: '30%'   
    })};
    ${props => props.round && ({
        borderRadius: `100%`,
        paddingBottom: `100%`,
        margin: `auto`,
    })};
    ${props => props.height && ({
        height: `${props.height}`,
        paddingBottom: '0px'   
    })};
    `;

    
function MediaPlaceholder(props) {
    return (
            <ImageContainer 
                video={props.video} 
                avitar={props.avitar} 
                round={props.round} 
                height={props.height}
                image={props.image}
                className={'media-container ' + props.className}>
                <p className="image-caption">{props.caption}</p>
            </ImageContainer>
    )
}

export default MediaPlaceholder
