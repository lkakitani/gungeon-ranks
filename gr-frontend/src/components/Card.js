import React from 'react';

export const Card = props => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{props.item.name}</div>
        <div className="meta">{props.item.quote}</div>
        {/* <div className="description">
          Elliot Fu is a film-maker from New York.
        </div> */}
        <img class="ui mini image" src={props.item.icon_path}></img>

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