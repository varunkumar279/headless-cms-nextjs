import React from 'react';

const Paragraph = (props) => {
    return (
        <React.Fragment>
            <p dangerouslySetInnerHTML={{__html: props.children}}></p>
        </React.Fragment>
    )
}

export default Paragraph;