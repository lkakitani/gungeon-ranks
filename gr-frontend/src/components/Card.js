import React from 'react';

export const Card = props => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{props.itemName}</div>
        <div className="meta">{props.itemQuote}</div>
        <div className="description">
          Elliot Fu is a film-maker from New York.
        </div>
      </div>
      <div className="ui bottom attached button">
        Choose
      </div>
    </div>
  );
};

export const RerollCard = () => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">?</div>
        <div className="description">
          I don't know / can't decide
        </div>
      </div>
      <div className="ui bottom attached button">
        Reroll
      </div>
    </div>
  );
};