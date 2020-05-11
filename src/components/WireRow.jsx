import React from 'react';

function WireRow(props) {
    return (
        <div className={'wire-row ' + props.className}>
            {props.children}
        </div>
    )
}

export default WireRow
