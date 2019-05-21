import React from 'react';

export const Segment = props => {
  return (
    <div className="ui massive message">
      <p>{props.title}</p>
    </div>
  );
};