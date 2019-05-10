import React from 'react';

export const Segment = props => {
    return (
        <div className="ui secondary inverted segment">
            <p>{props.title}</p>
        </div>
    );
};