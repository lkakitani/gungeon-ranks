import React from 'react';

export const Card = props => {
  return (
    <div className="ui card">
      <div className="content center aligned">
        <div className="header">{props.item.name}</div>
        {/* <div className="description">
          Elliot Fu is a film-maker from New York.
        </div> */}
        <div className="img-card">
          <img class="ui mini image" src={props.item.icon_path} alt={props.item.name}></img>
        </div>
        <div className="description">"{props.item.quote}"</div>

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
      <div className="content center aligned">
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