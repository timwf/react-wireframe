import React from 'react'
import styled from 'styled-components'
import Image from "../component-images/image-placeholder.png"
import Video from "../component-images/video-placeholder.png"

const ImageContainer = styled.div`
    background-image: url(${props => props.video ? Video : Image});
    `;

function MediaPlaceholder(props) {
    return (
            <ImageContainer video={props.video}className="media-container">
                <p className="image-caption">{props.caption}</p>
            </ImageContainer>
    )
}

export default MediaPlaceholder
