import React from 'react';

const Heading = (props) => {
    return (
        <React.Fragment>
          
            <h4 dangerouslySetInnerHTML={{__html: props.children}}></h4>
        </React.Fragment>
    )
}

export default Heading;